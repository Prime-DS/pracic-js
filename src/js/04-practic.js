const list = document.querySelector('.list');
const KEY = '77a967833c1c43c397a750d1eb5c87d4';
const BASE_URL = 'https://newsapi.org/v2';

const URL = `${BASE_URL}/top-headlines?apiKey=${KEY}&category=sports&country=ua&pageSize=20`;

fetch(URL)
  .then(response => response.json())
  .then(data => {
    isertContent(data.articles);
    // console.log('data', data);
  })
  .catch(error => {
    console.log('error', error);
  });

const createListItem = item => `<li class="list__item">
${
  item.urlToImage
    ? `<img src="${item.urlToImage}" alt="${item.descrition}">`
    : ''
}
<h2>${item.titel ?? ''}</h2>
<p>${item.author ? item.author : ''}</p>
<p>${item.descrition ? item.descrition : ''}</p>
<a href="${item.url} target="_blank">go to full</a>
</li>`;

const generateContent = array =>
  array.reduce((acc, item) => acc + createListItem(item), '');

const isertContent = array => {
  const result = generateContent(array);
  list.insertAdjacentHTML('beforeend', result);
};
