const list = document.querySelector('.list');
const formEL = document.querySelector('.form');
const categoryEl = document.querySelector('.category');
const pageSizeEl = document.querySelector('.pageSize');
const titel = document.querySelector('.counter');
const subTitel = document.querySelector('.totaPages');
const loadMoreBtn = document.querySelector('.load');

const KEY = '77a967833c1c43c397a750d1eb5c87d4';
const BASE_URL = 'https://newsapi.org/v2';
let currentPage = 1;

// const URL = `${BASE_URL}/top-headlines?apiKey=${KEY}&category=sports&country=ua&pageSize=20`;
const updateUi = (data, pageSize) => {
  titel.textContent = `${data?.totalResults} news`;
  list.innerHTML = '';
  subTitel.textContent = `pages found ${Math.ceil(
    data?.totalResults / pageSize
  )} news `;
};

const handleSubmit = e => {
  e.preventDefault();
  const category = categoryEl.value;
  const pageSize = pageSizeEl.value;
  const url = `${BASE_URL}/top-headlines?apiKey=${KEY}&category=${category}&country=ua&pageSize=${pageSize}&page=${currentPage}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (e.type === 'submit') {
        updateUi(data, pageSize);
      }
      isertContent(data.articles);
      if (currentPage > Math.ceil(data?.totalResults / pageSize)) {
        loadMoreBtn.classList.add('hide');
      }
      // console.log('data', data);
    })
    .catch(error => {
      console.log('error', error);
    })
    .finally(() => {
      currentPage += 1;
    });
};

formEL.addEventListener('submit', handleSubmit);
loadMoreBtn.addEventListener('click', handleSubmit);

const createListItem = item => `<li>
${
  item.urlToImage
    ? `<img src="${item.urlToImage}" alt="${item.description}">`
    : ''
}
<h2>${item.title}</h2>
<p>${item.description ? item.description : ''}</p>
<p>${item.author ?? ''}</p>
<a href="${item.url}" target="_blank">go to full</a>
</li>`;

const generateContent = array =>
  array ? array.reduce((acc, item) => acc + createListItem(item), '') : '';

const isertContent = array => {
  const result = generateContent(array);
  list.insertAdjacentHTML('beforeend', result);
};
