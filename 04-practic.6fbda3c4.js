const e=document.querySelector(".list"),t=document.querySelector(".form"),n=document.querySelector(".category"),o=document.querySelector(".pageSize"),l=document.querySelector(".counter"),c=document.querySelector(".totaPages"),r=document.querySelector(".load");let a=1;const u=t=>{t.preventDefault();const u=n.value,s=o.value;fetch(`https://newsapi.org/v2/top-headlines?apiKey=77a967833c1c43c397a750d1eb5c87d4&category=${u}&country=ua&pageSize=${s}&page=${a}`).then((e=>e.json())).then((n=>{"submit"===t.type&&((t,n)=>{l.textContent=`${null==t?void 0:t.totalResults} news`,e.innerHTML="",c.textContent=`pages found ${Math.ceil((null==t?void 0:t.totalResults)/n)} news `})(n,s),d(n.articles),a>Math.ceil((null==n?void 0:n.totalResults)/s)&&r.classList.add("hide")})).catch((e=>{console.log("error",e)})).finally((()=>{a+=1}))};var s;t.addEventListener("submit",u),r.addEventListener("click",u);const i=e=>e?e.reduce(((e,t)=>e+(e=>`<li>\n${e.urlToImage?`<img src="${e.urlToImage}" alt="${e.description}">`:""}\n<h2>${e.title}</h2>\n<p>${e.description?e.description:""}</p>\n<p>${null!==(s=e.author)&&void 0!==s?s:""}</p>\n<a href="${e.url}" target="_blank">go to full</a>\n</li>`)(t)),""):"",d=t=>{const n=i(t);e.insertAdjacentHTML("beforeend",n)};
//# sourceMappingURL=04-practic.6fbda3c4.js.map
