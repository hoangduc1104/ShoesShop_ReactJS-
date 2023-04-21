import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { AiOutlineClose } from 'react-icons/ai';
import Button from '../../component/Button';
import { Link } from 'react-router-dom';
import ProductItem from '../../component/ProductItem';
import { cartActions, useCart } from '../../Store';

export default function Cart({ openCart, callBack }) {
  const [cartState, cartDispatch] = useCart();

  var total;
  if (cartState.cart && cartState.cart.length > 0) {
    total = cartState?.cart[0].products
      .reduce(
        (total, product) => total + product.product.price * product.quantity,
        0
      )
      .toLocaleString('en-US', { style: 'currency', currency: 'VND' });
  }

  return (
    <Transition.Root show={cartState.openCart} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => cartDispatch(cartActions.setOpenCart(false))}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed top-20 inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Giỏ hàng
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() =>
                              cartDispatch(cartActions.setOpenCart(false))
                            }
                          >
                            <span className="sr-only">Close panel</span>
                            <AiOutlineClose
                              className="h-6 w-6 focus-visible:outline-none"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {cartState.cart && cartState.cart.length > 0 ? (
                              cartState.cart[0].products?.map((product) => (
                                <li key={product._id} className="flex py-6">
                                  <ProductItem
                                    product={product}
                                    // callback=handleDeleteCart(product._id)
                                  />
                                </li>
                              ))
                            ) : (
                              <p>Giỏ hàng trống</p>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Tổng tiền:</p>
                        <p>{total}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Thanh toán sau khi nhận hàng.
                      </p>
                      <div className="mt-5">
                        <Button rouded className="w-full">
                          Mua
                        </Button>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          <Link
                            to="/"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() =>
                              cartDispatch(cartActions.setOpenCart(false))
                            }
                          >
                            Tiếp tục mua sắm
                            <span aria-hidden="true"> &rarr;</span>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
