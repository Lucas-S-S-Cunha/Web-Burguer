

const menuOptions = [
    { name: 'X-Salada', price: 30, vegan: false, src: './img/xsalada.jpeg' },
    { name: 'X-Bacon', price: 34, vegan: false, src: './img/xbacon.png' },
    { name: 'X-Bacon Egg', price: 39, vegan: false, src: './img/bacon-egg.png' },
    { name: 'Monstruoso', price: 50, vegan: false, src: './img/monstruoso.png' },
    { name: 'Big Vegano', price: 55, vegan: true, src: './img/xvegan.png' },
    { name: 'X-Vegan', price: 45, vegan: true, src: './img/monstruoso-vegan.png' },
    
]

const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const discountButton = document.querySelector('.map')
const sumAll = document.querySelector('.final-value')
const filter = document.querySelector('.filter')

function showAll(productsArray) {
        let myLi = ``
    productsArray.forEach(product => {
        myLi = myLi + `
        <li>
        <img src=${product.src} alt="">
        <p class=>${product.name}</p>
        <p class="price">R$ ${product.price}</p>
    </li>
`
    list.innerHTML = myLi
});
}

function mapAllItems() {
    const newPrices = menuOptions.map( (product) => ({
        ...product,
        price: product.price * 0.9,
    
    }))
        showAll(newPrices)
        console.log(newPrices)
}

function sumAllItems() {
    const finalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
list.innerHTML = `
        <li>
        
            <p>o valor total da soma de todos os itens resultou em R$ ${finalValue}</p>
        </li>
` 
}

function filterVegans() {
    const vegans = menuOptions.filter(product => (product.vegan === true))
    showAll(vegans)
}

filter.addEventListener('click', filterVegans)
sumAll.addEventListener('click', sumAllItems)
buttonShowAll.addEventListener('click', () => showAll(menuOptions))
discountButton.addEventListener('click', mapAllItems)