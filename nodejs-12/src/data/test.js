const { products } = require('./products');

const ids = [110, 130, 140, 230, 310, 330];

const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

const getProductsById = (ids, productsList) => {
  return productsList.filter((product) => ids.includes(product.id));
};

const productsList = getProductsById(ids, products)

const getCategoryOfProduct = (products) => {
  return productsList.map((product) => product.category)
}

console.log(getCategoryOfProduct(productsList))

const getPromotionsOfProtuct = (category) => {
  return category.filter((category, index, array) => array.indexOf(category) === index)
}

// const productsList = getProductsById(ids, products)

// console.log(productsList.map((product) => product.category)
//             .filter((category, index, array) => array.indexOf(category) === index)
// )
            
// console.log(promotions[3 - 1])
