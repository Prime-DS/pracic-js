// fetch(`https://newsapi.org/v2/top-headlines?country=us&apiey=${KEY}`)
//     .then((response) => response.json())
//     .then((data) => {
    //         console.log(data);
    //     }).catch((error) => {
        //         console.log(error)
        //     })


const KEY = '77a967833c1c43c397a750d1eb5c87d4';
const BASE_URL = 'https://newsapi.org/v2/'
const URL = `${BASE_URL}top-headlines?apiKey=${KEY}`