const fs = require('fs');
const { execSync } = require('child_process');

// Read the URLs from the JSON file
const rawData = fs.readFileSync('discoveredUrls.json');
const urls = JSON.parse(rawData);

fs.writeFileSync('serverResponses.txt', '');


// Iterate over each URL
urls.forEach(url => {
    // Run curl operation
    const command = `curl -s -o /dev/null -w "%{http_code}" ${url}`;
    try {
        const response = execSync(command).toString().trim();
        // Log the response from the server with a line break
        fs.writeFileSync('serverResponses.txt', `URL: ${url}, Response Code: ${response}\n`, { flag: 'a' });
        console.log(`URL: ${url}, Response Code: ${response}`);
    } catch (error) {
        console.error(`Error occurred while fetching ${url}:`, error.message);
    }
});

console.log('Server responses logged to serverResponses.txt');
