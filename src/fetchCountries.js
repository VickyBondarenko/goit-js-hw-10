// 1. Дoступ до імпут
// 2. Функція пошуку
// 3. Перевірка на кільkість отриманних данних

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
