# Cocktail Finder

## Description 

Cocktail Finder is a fun, easy-to-use web application that allows users to discover new cocktails with a single click. It leverages the CocktailDB API to retrieve a random cocktail, along with its ingredients and preparation instructions, and then displays this information in a neat, user-friendly layout.

#### By Michael Carroll, Moshe Atia

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _Webpack_
* _Babel_
* _Fetch API_
* _Giphy-API_

## Project Structure
The project is organized as follows:

index.html: The main HTML file that structures the web app and includes the necessary DOM elements.
index.js: The JavaScript entry point file. It handles the button event and uses the ApiRequest class to fetch data from the API.
ApiRequest.js: This JavaScript file includes the ApiRequest class, which has a static method send that creates a new XMLHttpRequest to the API, returns a promise, and resolves with the JSON response if the request is successful.
styles.css: This file includes all the necessary styling for the web application.


## Setup/Installation Requirements

1. Clone the repository

```bash
$ git clone https://github.com/Object-ions/Currency-Exchanger
$ cd currency-converter
```

2. Install the dependencies

```bash
$ npm install
```

3. Create a `.env` file in the root of your project and add your Giphy-API key. The format should be like this:

```bash
API_KEY=your_api_key_number
```

4. Run the application

```bash
$ npm start
```

## Known Bugs

* No bugs known

## License

[MIT License](https://choosealicense.com/licenses/mit/)

Copyright (c) 2023 Moshe Atia Poston, Michael Carroll

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
