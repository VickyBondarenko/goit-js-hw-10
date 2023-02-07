// 1. Дoступ до імпут
// 2. Функція пошуку
// 3. Перевірка на кільkість отриманних данних

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

export function fetchCountries(name) {
  const countryRequest = fetch(
    ` https://restcountries.com/v3.1/name/${name}?fields=,name,capital,population,flags,languages`
  );
  countryRequest
    .then(response => {
      if (!response.ok) {
        throw Error('Oops, there is no country with that name');
      }
      return response.json();
    })
    .then(countries => {
      console.log(countries);
      if (countries.length >= 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        return;
      }
      if (countries.length < 10 && countries.length > 2) {
        console.log(`countries list`);
        renderCountryList(countries);
      } else {
        console.log(`one country`);
        renderCountryCard(countries);
      }
    })
    .catch(error => {
      console.log(error.message);
      Notify.failure(error.message);
    });
}

function renderCountryList(countries) {
  const markupCountryList = countries
    .map(({ flags, name }) => {
      return `<li><img src=${flags.svg} alt = ${flags.alt} width = 60/><p class="country-name">${name.common}</p></li>`;
    })
    .join('');
  countryList.insertAdjacentHTML('beforeend', markupCountryList);
}

function renderCountryCard(countries) {
  const markupCountryCard = countries
    .map(({ flags, name, capital, population, languages }) => {
      return `<img src=${flags.svg} alt = ${
        flags.alt
      } width = 60/><h2 class="country-singl-name">${
        name.common
      }</h2><ul><li><span class="property">Capital:</span> ${capital}</li><li><span class="property">Population:</span> ${population}</li><li> <span class="property">Languages:</span> ${Object.values(
        languages
      )}</li></ul>`;
    })
    .join('');
  countryInfo.insertAdjacentHTML('beforeend', markupCountryCard);
}
