const { products } = require('./data/products');

const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

//Filtering products by ids of array 
const getProductsById = (ids, productsList) => {
  return productsList.filter((product) => ids.includes(product.id));
};

//Filtering categories from products
const getCategoryOfProducts = (products) => {
  return productsList.map((product) => product.category)
                     .filter((category, index, array) => array.indexOf(category) === index)  
}

//Getting promotions of products
const getPromotionOfProducts = (category) => {
  return promotions[category.legnth - 1]
}

const getPriceOfPromotion = (promotions, promotion) => {
  return promotions.filter((product) => product.looks.includes(promotion));
}

const getCart = (products, promotion) =>
  products.reduce(
    (cart, product) => {
      const { name, category, regularPrice, promotions } = product;

      const [promotionPrice] = getPricePromotion(promotions, promotion);

      cart.products.push({ name, category });
      cart.regularPrice += regularPrice;
      cart.price += promotionPrice ? promotionPrice.price : regularPrice;
      const getCart = (products, promotion) =>
      products.reduce(
        (cart, product) => {
          const { name, category, regularPrice, promotions } = product;
    
          const [promotionPrice] = getPricePromotion(promotions, promotion);
    
          cart.products.push({ name, category });
          cart.regularPrice += regularPrice;
          cart.price += promotionPrice ? promotionPrice.price : regularPrice;
    
          return cart;
        },
        {
          products: [],
          price: 0,
          regularPrice: 0,
        }
      );
      return cart;
    },
    {
      products: [],
      price: 0,
      regularPrice: 0,
    }
  );

const getShoppingCart = (ids, productsList) => {
  
  products = getProductsById(ids, productsList)
  category = getCategoryOfProducts(products)
  promotion = getPromotionOfProducts(category) 
  price = getPriceOfPromotion()
 
	
	return {};
}

module.exports = { getShoppingCart };
