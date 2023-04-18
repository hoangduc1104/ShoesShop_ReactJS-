export function getProductInCart() {
  if (typeof localStorage.getItem('productsInCart') !== 'undefined') {
    return JSON.parse(localStorage.getItem('productsInCart'));
  }
  return null;
}
export function setProductInCart(data) {
  localStorage.setItem('productsInCart', JSON.stringify(data));
  return data;
}
