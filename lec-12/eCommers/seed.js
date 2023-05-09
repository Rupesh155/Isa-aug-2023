const Product=require('./modejs/product')

const products = [
    {
    name:"iphone 14pro",
    img:'https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFwcGxlfGVufDB8fD',
    price: 140000,
    desc: "bohat mahenga"
    },
    {
    name:"macbook m2",
    img:'https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFwcGxlfGVufDB8fD',
    price: 250000,
    desc: "aukaat ke bahar"
    },
    {
    name:"iwatch",
    img:'https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFwcGxlfGVufDB8fD',
    price: 70000,
    desc: "useless product"
    },
    {
    name:"ipad",
    img:'https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFwcGxlfGVufDB8fD',
    price: 88000,
    desc: "badiya cheez"
    },
    {
    name:"airpods",
    img:'https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFwcGxlfGVufDB8fD',
    price: 27000,
    desc: "vahiyaad thuuu radddi"
    } 
]

async function seedDB(){
     await Product.insertMany(products)
     console.log('data added successfully')
}
module.exports=seedDB;
