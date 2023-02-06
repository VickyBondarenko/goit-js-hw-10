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

input.addEventListener('input', onInput());

function onInput(event) {
  console.log(event.currentTarget.value);
}
// debounce(onImput(), DEBOUNCE_DELAY);
