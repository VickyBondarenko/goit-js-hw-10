import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries.js';

const DEBOUNCE_DELAY = 300;

const input = document.getElementById('search-box');

const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

input.addEventListener('input', debounce(onSerch, DEBOUNCE_DELAY));

function onSerch(event) {
  event.preventDefault();
  const country = event.target.value.trim();
  if (country !== '') {
    countryList.innerHTML = '';
    countryInfo.innerHTML = '';
    fetchCountries(country);
  }
}
