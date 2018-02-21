# star-wars-search
an app that allows you to search for your favorite, or least favorite, star wars character


## A Star Wars Character Search
This is a very tiny web app that allows you to search for your favorite, or least favorite, star wars character. It uses [SWAPI](https://swapi.co/) as an API endpoint for your query. It will return data from SWAPI for the character search. Data includes the characters name, gender, hair color and eye color. A user can search for a character with any letters and then filter results by gender. With the current implementation the app only returns the first 10 results from SWAPI.

## Deployment
This project uses continuous deployment via [Netlify](https://www.netlify.com/) to deploy from the `master` branch. Check it out [here](https://star-wars-search.netlify.com/).

<a href="https://www.netlify.com">
  <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"  height="144"/>
</a>

(https://www.netlify.com/img/global/badges/netlify-color-accent.svg)

## Screenshots
(https://cl.ly/0g1C0I0T370Z)

## Tech/framework used
- jQuery
- Vanilla JavaScript
- CSS (from scratch)

<b>Built in</b>
- [VS Code](https://code.visualstudio.com/)

## API Endpoint
This app is using the following API endpoint at SWAPI, where `${searchValue}` is the user's search query. You can go to the link in your browser to look at the details. 
```
https://swapi.co/api/people/?search=${searchValue}
```

## Installation
Provide step by step series of examples and explanations about how to get a development env running.

## API Reference

Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

## Tests
At this time there are no tests. 

## How to use?
It is pretty easy to get off the ground with this website. 
1. Search for your favorite character
2. Peruse the results
3. Filter the results by gender if desired.
4. Search again to your heart's content!

## Future TODO
- Build out the ability for more than 10 results to come back from SWAPI (Pagination on SWAPI's end)
- Write tests!

## Contribute
Feel free to contribute! Just submit a PR and I'll take a look.

## Credits
Thanks to Soylent for powering me through this project. 

#### Anything else that seems useful

## License
MIT License is applicable here.

MIT © [David A. Lindahl](www.davidalindahl.com)