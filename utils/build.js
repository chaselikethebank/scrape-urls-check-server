const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');
const { URL } = require('url');
// const initialBaseUrl = 'add your base url here and comment the line back it';


async function crawlWebsite(baseUrl, maxDepth = 3) {
    const visitedUrls = new Set();
    const discoveredUrls = [];

    async function crawl(url, depth) {
        if (depth > maxDepth || visitedUrls.has(url)) return;

        try {
            const response = await axios.get(url);
            const $ = cheerio.load(response.data);
            
            $('a').each((index, element) => {
                const href = $(element).attr('href');
                if (href) {
                    const absoluteUrl = resolveUrl(baseUrl, href);
                    if (isInternalUrl(baseUrl, absoluteUrl)) {
                        discoveredUrls.push(absoluteUrl);
                        crawl(absoluteUrl, depth + 1);
                    }
                }
            });

            visitedUrls.add(url);
        } catch (error) {
            console.error(`Error crawling ${url}:`, error);
        }
    }

    await crawl(baseUrl, 0);

    fs.writeFileSync('discoveredUrls.json', JSON.stringify(discoveredUrls, null, 2));
    console.log('All discovered URLs written to file: discoveredUrls.json');
}

function isInternalUrl(baseUrl, url) {
    return url.startsWith(baseUrl);
}

function resolveUrl(baseUrl, href) {
    try {
        const absoluteUrl = new URL(href, baseUrl).href;
        return absoluteUrl;
    } catch (error) {
        console.error(`Error resolving URL ${href}:`, error);
        return '';
    }
}

crawlWebsite(initialBaseUrl);
