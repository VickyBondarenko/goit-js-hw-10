// 1. Дoступ до імпут
// 2. Функція пошуку
// 3. Перевірка на кільkість отриманних данних

// function fetchCountries(name) {
//   const countryRequest = fetch(
//     ` https://restcountries.com/v3.1/name/${name}?fields=,name,capital,population,flags,languages`
//   );
//   countryRequest
//     .then(response => {
//       if (!response.ok) {
//         throw Error('Oops, there is no country with that name');
//       }
//       return response.json();
//     })
//     .then(countries => {
//       console.log(countries);
//       if (countries.length >= 10) {
//         Notify.info(
//           'Too many matches found. Please enter a more specific name.'
//         );
//         return;
//       }
//       if (countries.length < 10 && countries.length > 2) {
//         renderCountryList(countries);
//       } else {
//         renderCountryCard(countries);
//       }
//     })
//     .catch(error => {
//       Notify.failure(error.message);
//     });
// }

function fetchCountries(name) {
  return fetch(
    ` https://restcountries.com/v3.1/name/${name}?fields=,name,capital,population,flags,languages`
  ).then(response => {
    if (!response.ok) {
      throw Error('Oops, there is no country with that name');
    }
    return response.json();
  });
}

export { fetchCountries };
