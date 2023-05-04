import React, { useEffect, useState } from 'react';
import { getToken, getUser } from '../../helper/auth';
import { cartActions, useCart } from '../../Store';
import CartService from '../../service/cart';
import { setProductInCart } from '../../helper/cart';
import { Link, useNavigate } from 'react-router-dom';

function ProductItem({ product, callback, ...props }) {
  const navigate = useNavigate();

  const [cartState, cartDispatch] = useCart();
  const [loadding, setLoadding] = useState(false);

  const handleDeleteCart = async (product_id) => {
    const data = {
      user_id: getUser()._id,
      product_id: product_id,
    };
    const token = getToken();
    setLoadding(true);
    await CartService.deleteProductInCart(data, token);
    setLoadding(false);
  };

  const handleReLoad = async () => {
    const cartReponse = await CartService.getAllByUserId(
      getUser()._id,
      getToken()
    );
    cartDispatch(cartActions.setCart(cartReponse));
    setProductInCart(cartReponse);
  };

  useEffect(() => {
    handleReLoad();
  }, [loadding]);
  return (
    <>
      <div className="flex py-6">
        <div
          className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
          onClick={() => {
            navigate(`update/detail/${product?._id}`, {
              state: { productItem: product },
            });
            cartDispatch(cartActions.setOpenCart(false));
          }}
        >
          <img
            src={product?.product.avatar}
            alt={product?.product.avatar}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="ml-4 flex flex-1 flex-col">
          <div
            onClick={() => {
              navigate(`update/detail/${product?._id}`, {
                state: { productItem: product },
              });
              cartDispatch(cartActions.setOpenCart(false));
            }}
          >
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3 className="line-clamp-2">
                <p href={'#'} className="cursor-pointer">
                  {product?.product.name}
                </p>
              </h3>
              <p className="ml-4">
                {product?.product.price.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'VND',
                })}
              </p>
            </div>
            <p className="mt-1 text-sm text-gray-500">{product.color}</p>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <p className="text-gray-500">SL: {product.quantity}</p>

            <div className="flex">
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
                onClick={() => handleDeleteCart(product?._id)}
              >
                Xoá
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
