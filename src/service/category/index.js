import React from 'react';
import CATEGORY_API from '../../api/category/categoryApi';

const CategoryService = {
  getAll: (data) => CATEGORY_API.getAll(data),
};

export default CategoryService;
