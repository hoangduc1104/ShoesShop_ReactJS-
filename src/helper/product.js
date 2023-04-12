import cookies from 'js-cookie';

export function setProductResult(data) {
  localStorage.setItem('productsResult', JSON.stringify(data));
  return data;
}
export function getProductResult() {
  if (typeof localStorage.getItem('productsResult') !== 'undefined') {
    return localStorage.getItem('productsResult');
  }
  return '';
}
