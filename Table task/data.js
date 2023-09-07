let products = [
    {
        pName : "mobile",
        price : 750,
        color : "green"
    },
    {
        pName : "laptop",
        price : 3000,
        color : "black"
    },
    {
        pName : "charger",
        price : 200,
        color : "white"
    },
    {
        pName : "camera",
        price : 4000,
        color : "red"
    },
    {
        pName : "mobile",
        price : 3500,
        color : "red"
    },
    {
        pName : "laptop",
        price : 5000,
        color : "yellow"
    },
    {
        pName : "charger",
        price : 300,
        color : "blue"
    },
    {
        pName : "camera",
        price : 5000,
        color : "crimson"
    },
    {
        pName : "mobile",
        price : 2500,
        color : "red"
    },
    {
        pName : "laptop",
        price : 3500,
        color : "yellow"
    }
]



let tbody = document.querySelector("tbody");
let productTotal = document.getElementById("totalPrice")

let price = products.reduce((acc, {price})=>{ return acc+price}, 0)

productTotal.innerText = price;

products.map(({pName,price,color},index)=>{
    tbody.innerHTML +=
    `<tr>
        <th>${index+1}</th>
        <th>${pName}</th>
        <th>${price}</th>
        <th>${color}</th>
    </tr>`
})

function sort(){
    let tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    let productTotal = document.getElementById("totalPrice")
    let search = document.getElementById("input").value

    let filteredProduct;
    (!search)? filteredProduct = products :
    filteredProduct = products.filter(({pName, price, color})=>{
        return pName.toLowerCase().includes(search) ||
        price === parseInt(search) ||
        color.toLowerCase().startsWith(search)
    })

    let price = filteredProduct.reduce((acc, {price})=>{ return acc+price}, 0)

    productTotal.innerText = price;

    filteredProduct.map(({pName,price,color},index)=>{
        tbody.innerHTML +=
        `<tr>
            <th>${index+1}</th>
            <th>${pName}</th>
            <th>${price}</th>
            <th>${color}</th>
            </tr>`
        })
    }
    // document.getElementById("input").addEventListener(onkeyup, sort())
