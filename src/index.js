import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries.js';

const DEBOUNCE_DELAY = 300;

const input = document.getElementById('search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

input.addEventListener('input', debounce(onSerch, DEBOUNCE_DELAY));

// function onSerch(event) {
//   event.preventDefault();
//   const country = event.target.value.trim();
//   if (country !== '') {
//     clearMarkup();
//     fetchCountries(country);
//   }
//   clearMarkup();
// }

// function clearMarkup() {
//   countryList.innerHTML = '';
//   countryInfo.innerHTML = '';
// }

function onSerch(event) {
  event.preventDefault();
  const country = event.target.value.trim();
  if (country !== '') {
    clearMarkup();
    fetchCountries(country)
      .then(countries => {
        console.log(countries);
        if (countries.length >= 10) {
          Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
          return;
        }
        if (countries.length < 10 && countries.length > 2) {
          renderCountryList(countries);
        } else {
          renderCountryCard(countries);
        }
      })
      .catch(error => {
        Notify.failure(error.message);
      });
  }
  clearMarkup();
}

function clearMarkup() {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
}

function renderCountryList(countries) {
  const markupCountryList = countries
    .map(({ flags, name }) => {
      return `<li class = "country-item"><img class="country-flag" src=${flags.svg} alt = ${flags.alt} width = 50/><p class="country-name">${name.common}</p></li>`;
    })
    .join('');
  countryList.insertAdjacentHTML('beforeend', markupCountryList);
}

function renderCountryCard(countries) {
  const markupCountryCard = countries
    .map(({ flags, name, capital, population, languages }) => {
      return `<div class="country-div"><img src=${flags.svg} alt = ${
        flags.alt
      } width = 50/><h2 class="country-singl-name">${
        name.common
      }</h2></div><ul><li class="country-property"><span>Capital:</span> ${capital}</li><li class="country-property"><span>Population:</span> ${population}</li><li class="country-property"> <span>Languages:</span> ${Object.values(
        languages
      )}</li></ul>`;
    })
    .join('');
  countryInfo.insertAdjacentHTML('beforeend', markupCountryCard);
}
