const main = document.querySelector('#main');

const h1 = main.firstElementChild;

// console.log(h1);

const section = h1.nextElementSibling;

const div = section.firstElementChild;

const h2 = div.firstElementChild;

const article = h2.nextElementSibling;

const products = article.children;
// console.log(products);

// console.log(article);

// Get cart
const cart = main
.firstElementChild
.nextElementSibling
.lastElementChild

console.log(cart);

//Step 2. Convert HTML Collections to Array

const productArray = Array.from(products);
// console.log(productArray);

productArray.forEach(product =>{
    const img = product.firstElementChild;
    const figcaption = img.nextElementSibling;  
    const button = figcaption.nextElementSibling;

    button.addEventListener('click', ()=>{
        const h5 = document.createElement('h5');
        h5.innerText = product.firstElementChild
                              .nextElementSibling
                              .innerText

        cart.appendChild(h5)
    })
});