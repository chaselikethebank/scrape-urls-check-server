# Web Crawler and URL Response Checker

This program is designed to crawl a website, discover its internal URLs, and check the response codes of those URLs using cURL. It consists of several modules for crawling, building, and checking URLs.

## File Structure

├── discoveredUrls.json
├── package-lock.json
├── package.json
├── readme.md
├── server.js
├── serverResponses.txt
└── utils
├── build.js
└── check.js

2 directories, 8 files


## Usage

1. First, install the dependencies:

npm install


2. Add the url you are hoping to gather the children of to the build.js file on line 6
// const initialBaseUrl = 'add your base url here and comment the line back it';


3. Run the program:

node server.js

4. Review the log @ serverResponse.txt

## Components

- **server.js:** The main entry point of the program. It executes the web crawling and URL response checking operations.

- **utils/build.js:** Contains the build logic for the program.

- **utils/check.js:** Contains the check logic for the program.

## Dependencies

- **axios:** HTTP client for making requests to websites.
- **cheerio:** HTML parsing and manipulation library.
- **child_process:** Module for spawning child processes (used for cURL operations).
- **fs:** File system module for reading and writing files.
- **url:** Module for URL parsing.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.