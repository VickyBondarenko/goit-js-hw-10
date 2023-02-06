// 1. Даступ до імпут
// 2. Функція пошуку
// 3. Перевірка на кільеість отриманних данних

const FILTER = {
  countryName: name.official,
  capital: capital,
  population: population,
  flag: flags.svg,
  languages: languages,
};
const { name, capital, population, flag } = FILTER;
const countryRequest = fetch(
  `https://restcountries.com/v3.1/name/${country}?fields=${countryName},${capital},${population},${flag},${languages}}`
);
countryRequest
  .then(response => {
    if (!response.ok) {
      throw Error('Can not fetch books');
    }
    return response.json();
  })
  .then(result => {
    // booksError.textContent = '';
    // booksList.textContent = '';
    if (!result.length) {
      return (booksList.textContent = 'Nothing found');
    }
    const books = result.map(
      ({ title, author }) => `<li>${title}. Author ${author}</li>`
    );
    booksList.insertAdjacentHTML('beforeend', books.join(''));
  })
  .catch(error => {
    booksError.textContent = error.message;
  });
