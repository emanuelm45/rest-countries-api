# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode

### Screenshots

#### Desktop Layout

![Desktop](https://github.com/emanuelmarques45/portfolio-images/blob/main/rest-countries/home-light-desktop.png)

![Desktop](https://github.com/emanuelmarques45/portfolio-images/blob/main/rest-countries/detail-light-desktop.png)

#### Mobile Layout

<p align="center">
  <img src="https://github.com/emanuelmarques45/portfolio-images/blob/main/rest-countries/home-dark-mobile.png" alt="Mobile">
</p>

<p align="center">
  <img src="https://github.com/emanuelmarques45/portfolio-images/blob/main/rest-countries/detail-dark-mobile.png" alt="Mobile">
</p>

### Links

- Solution URL: [Front-end Mentor](https://www.frontendmentor.io/solutions/country-search-web-application-using-reactjs-and-styled-components-fhfgiFhg0p)
- Live Site URL: [Vercel](https://rest-countries-tau-nine.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow
- [React](https://reactjs.org/) - JS library
- [React Query](https://react-query-v3.tanstack.com/) - React library to make HTTP requests
- [React Router DOM](https://reactrouter.com/en/main) - React library to make different routes in the application
- [React Select](https://react-select.com/) - React library to make custom select input
- [Framer Motion](https://www.framer.com/motion/) - Animations library
- [Styled Components](https://styled-components.com/) - For styles
- [Font Awesome](https://fontawesome.com/v5/docs/web/use-with/react) - Icon library

### What I learned

I learned how to use react query to make HTTP requests (which is much more simple than making requests manually), and used react select for the first time to use a custom select input.

To see how you can add code snippets, see below:

```js
function getAllCountries() {
  return useQuery('getAllCountries', async () => {
    return await fetch(`https://restcountries.com/v3.1/all`).then(data =>
      data.json()
    )
  })
}

const { data, isLoading } = getAllCountries()
```

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/pt-BR/)
- [DevDocs API Documentation](https://devdocs.io/)

## Author

- Frontend Mentor - [@emanuelm45](https://www.frontendmentor.io/profile/yourusername)
- LinkedIn - [Emanuel Marques](https://www.linkedin.com/in/emanuel-marques-541617215/)
