export const CartReducer = (state,action) => {
  
  const {shoopingCart,totalPrice,qty}=state;
  let product;
  let index;
  let updatedPrice;
  let updatedQty;

  switch (action.type) {
    case 'ADD_TO_CART':
      const check = shoopingCart.find(product => product.id === action.id)
      if(check){
        return state;
      }
      else{
        product = action.product;
        product['qty'] = 1;
        updatedQty = qty + 1;
        updatedPrice = (totalPrice + product.price);
        return {shoopingCart: [product,...shoopingCart],totalPrice:updatedPrice,qty:updatedQty}
      }
      break;
      case 'INC':
        product = action.cart;
        product.qty = product.qty+1;
        updatedPrice = totalPrice + product.price;
        updatedQty = qty + 1;
        index = shoopingCart.findIndex(cart => cart.id === action.id);
        shoopingCart[index] = product;
        return {shoopingCart: [...shoopingCart], totalPrice: updatedPrice,qty: updatedQty};
      break;

      case 'DEC':
        product = action.cart;
        if(product.qty>1){
          product.qty = product.qty-1;
          updatedPrice = totalPrice - product.price;
          updatedQty = qty - 1;
          index = shoopingCart.findIndex(cart => cart.id === action.id);
          shoopingCart[index] = product;
          return {shoopingCart: [...shoopingCart], totalPrice: updatedPrice,qty: updatedQty};
        }
        else{
          return state;
        }
      break;
      case 'DELETE':
        const filtered = shoopingCart.filter(product => product.id != action.id)
        product = action.cart;
        updatedQty = qty- product.qty;
        updatedPrice = totalPrice - product.price*product.qty; 
        return {shoopingCart: [...filtered], totalPrice: updatedPrice,qty : updatedQty}
      break;

      case 'EMPTY' : 
      return{shoopingCart: [], totalPrice : 0, qty:0}
      break;
      default:
        return state;
  }
}