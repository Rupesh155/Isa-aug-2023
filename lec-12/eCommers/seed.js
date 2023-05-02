const Product=require('./modejs/product')

const Products=[
    {
        name:'iphone 14pro',
        img:"",
        price:"1300000",
        desc:"bahut mahenga hai"
    },
    {
        name:'iphone 6pro',
        img:"",
        price:"1700000",
        desc:"bahut mahenga hai"
    }, {
        name:' macbook pro',
        img:"",
        price:"134000",
        desc:"bahut mahenga hai"
    }, {
        name:'iwatch',
        img:"",
        price:"900000",
        desc:"bahut mahenga hai"
    }, {
        name:'iphone 13pro',
        img:"",
        price:"1300000",
        desc:"bahut mahenga hai"
    }, {
        name:'iphone 17pro',
        img:"",
        price:"1700000",
        desc:"bahut mahenga hai"
    }, {
        name:'iphone 14pro',
        img:"",
        price:"1300000",
        desc:"bahut mahenga hai"
    }, {
        name:'iphone 14pro',
        img:"",
        price:"1300000",
        desc:"bahut mahenga hai"
    }, {
        name:'realmi',
        img:"",
        price:"20000",
        desc:"bahut mahenga nahi hai"
    } 
]

async function seedDB(){
     await Product.insertMany(Products)
     console.log('data added successfully')
}
module.exports=seedDB;
