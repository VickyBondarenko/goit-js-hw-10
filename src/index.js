import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const input = document.getElementById('search-box');
console.log(input);
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
console.log(countryList);
console.log(countryInfo);

const country = input.value;
console.log(country);

input.addEventListener('input', event =>
  console.log(event.currentTarget.value)
);

// function onInput(event) {
//   console.log(event.currentTarget.value);
// }

// debounce(onImput(), DEBOUNCE_DELAY);

// const markupCountry = `<img src=${flag}/><h2>${countryName}</h2><ul><li>Capital: ${capital}</li><li>Population: ${population}</li><li> Languages: ${languages}</li></ul>`;
