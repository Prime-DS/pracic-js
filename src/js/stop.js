const refs = {
  getButton: document.querySelector('.get'),
  form: document.querySelector('.form'),
  title: document.querySelector('.title'),
  text: document.querySelector('.text'),
  formUpdate: document.querySelector('.formUpdate'),
  textUpdate: document.querySelector('.textUpdate'),
  titleUpdate: document.querySelector('.titleUpdate'),
};

// const getPost = () => {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
// };

// const getPost = () => {
//   return fetch('https://jsonplaceholder.typicode.com/posts');
// };

// getPost()
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log(error));


const createPost = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
}


// const createPost = eve => {
//   eve.preventDefault();
//   const title = refs.title.value;
//   const text = refs.text.value;

//   return fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({ title: title, body: text }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   });
// };

// createPost()
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// const uppdatPost = e => {
//   e.preventDefault();
//   const title = refs.titleUpdate.value;
//   const text = refs.textUpdate.value;
//   fetch('https://jsonplaceholder.typicode.com/posts/100', {
//     method: 'PATCH',
//     body: JSON.stringify({ title: title }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
// };

refs.getButton.addEventListener('click', getPost);
refs.form.addEventListener('submit', createPost);
refs.formUpdate.addEventListener('submit', uppdatPost);
