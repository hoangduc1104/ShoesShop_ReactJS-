import React from 'react';
import PRODUCT_API from '../../api/product/productApi';

const ProductService = {
  getAll: (data) => PRODUCT_API.getAll(data),
  getById: (id) => PRODUCT_API.getById(id),
};

export default ProductService;
