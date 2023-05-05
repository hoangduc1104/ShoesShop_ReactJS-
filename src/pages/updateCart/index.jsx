import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Carousel } from 'flowbite-react';
import { STYLES } from '../../constant';
import { useEffect } from 'react';
import Button from '../../component/Button';
import { useOutletContext } from 'react-router-dom';
import ProductService from '../../service/product';
import CartService from '../../service/cart';
import { getToken, getUser } from '../../helper/auth';
import { cartActions, useCart } from '../../Store';
import { setProductInCart } from '../../helper/cart';

const UpdateCart = () => {
  const [cartState, cartDispatch] = useCart();

  const location = useLocation();
  const navigate = useNavigate();
  const [showBar] = useOutletContext();
  const [colorValue, setColorValue] = useState(
    location.state?.productItem.color
  );
  const [data, setData] = useState({});
  const [sizeValue, setSizeValue] = useState(location.state?.productItem.size);
  const [quantityValue, setQuantityValue] = useState(
    location.state?.productItem.quantity
  );
  const [loadding, setLoadding] = useState(false);
  const [errMessage, setErrMessage] = useState();

  const getData = async () => {
    const reponse = await ProductService.getById(
      location.state?.productItem.product._id
    );
    setData(reponse);
  };

  useEffect(() => {
    getData();
  }, [location.state?.productItem]);

  function handleChooseMode(listID, labelId, currentClass) {
    var header = document.getElementById(listID);
    var label = header.getElementsByClassName(labelId);
    for (var i = 0; i < label.length; i++) {
      label[i].addEventListener('click', function () {
        var current = document.getElementsByClassName(
          'active' + ' ' + currentClass
        );
        if (current.length !== 0) {
          current[0].className = current[0].className.replace(
            ' active border-2 border-orange-600',
            ''
          );
        }
        this.className += ' active border-2 border-orange-600';
      });
    }
  }

  const handleUpdateCart = async () => {
    const datas = {
      product: data._id,
      quantity: quantityValue,
      color: colorValue,
      size: sizeValue,
    };
    const params = {
      userId: getUser()._id,
      productId: location.state?.productItem._id,
    };

    setLoadding(true);
    const reponse = await CartService.updateCart(params, datas, getToken());
    setLoadding(false);
    cartDispatch(cartActions.setOpenCart(true));
  };

  const handleReLoad = async () => {
    if (getUser()) {
      const cartReponse = await CartService.getAllByUserId(
        getUser()._id,
        getToken()
      );
      cartDispatch(cartActions.setCart(cartReponse));
      setProductInCart(cartReponse);
    }
  };

  useEffect(() => {
    handleReLoad();
  }, [loadding]);

  useEffect(() => {
    handleChooseMode('list-product-color', 'label', 'product-color-item');
  }, [colorValue]);
  useEffect(() => {
    handleChooseMode('list-product-size', 'label', 'product-size-item');
  }, [sizeValue]);
  return (
    <>
      <div className="h-max">
        <div
          className={`${
            showBar ? '' : 'md:grid md:grid-cols-5'
          } lg:grid lg:grid-cols-5 gap-8`}
        >
          <div
            className={`${
              showBar ? '' : 'md:col-span-2 md:h-1/2'
            } lg:col-span-2 lg:h-1/2 h-[300px]`}
          >
            <Carousel className="h-[300px]">
              <img src={data.avatar} alt="..." />
            </Carousel>
          </div>
          <div
            className={`${
              showBar ? '' : 'md:col-span-3 md:top-0'
            } lg:col-span-3 lg:top-0 text-left mt-10 `}
          >
            <div className="flex">
              <span className={`${STYLES.text.text_secondary} text-lg`}>
                Tên sản phẩm:{' '}
              </span>
              <h3 className="text-xl font-bold ml-2">{data.name}</h3>
            </div>
            <div className="flex mt-4">
              <span className={`${STYLES.text.text_secondary} text-lg`}>
                Giá:{' '}
              </span>
              <h3
                className={`${STYLES.text.text_orange} text-xl font-bold ml-2`}
              >
                ${data.price}
              </h3>
            </div>
            <div className="mt-4">
              <span className={`${STYLES.text.text_secondary} text-lg`}>
                Mô tả:{' '}
              </span>
              <h3
                className={`${STYLES.text.text_secondary} text-base my-auto  ml`}
              >
                {data.description}
              </h3>
            </div>

            <div className="mt-8 flex border-t-2 w-full py-4">
              <span className={`${STYLES.text.text_secondary} text-lg`}>
                Màu:{' '}
              </span>
              <h3
                className={`${STYLES.text.text_primary} text-lg font-bold my-auto  ml-2 `}
              >
                {colorValue}
              </h3>
            </div>
            <div className="list-color">
              <ul className="flex" id="list-product-color">
                {data?.colors?.map((item, index) => (
                  <li className="mr-3 cursor-pointer " key={index}>
                    <label htmlFor={index}>
                      <img
                        src={item.image}
                        alt=""
                        className="label product-color-item w-12 h-12 rounded hover:border-2 border-orange-600"
                      />
                    </label>
                    <input
                      className="hidden"
                      type="radio"
                      name="product-color"
                      id={index}
                      value={item.color}
                      onChange={(e) => setColorValue(e.target.value)}
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex border-t-2 w-full py-4">
              <span className={`${STYLES.text.text_secondary} text-lg`}>
                Size:{' '}
              </span>
              <h3
                className={`${STYLES.text.text_primary} text-lg font-bold my-auto  ml-2 `}
              >
                {sizeValue}
              </h3>
            </div>
            <div className="list-size">
              <ul className="flex" id="list-product-size">
                {data?.size?.map((item, index) => (
                  <li className="mr-3 cursor-pointer " key={index}>
                    <label htmlFor={item + index} className="bg-red flex">
                      <p className="label product-size-item w-10 h-8 bg-[#e5e5e5] text-center leading-8 rounded font-medium text-lg">
                        {item}
                      </p>
                    </label>
                    <input
                      className="hidden"
                      type="radio"
                      name="product-color"
                      id={item + index}
                      value={item}
                      onChange={(e) => setSizeValue(e.target.value)}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mt-8 flex border-t-2 w-full py-4">
                <span className={`${STYLES.text.text_secondary} text-lg`}>
                  Số lượng:{' '}
                </span>
                <input
                  type="number"
                  className="focus:outline-none focus:shadow-node focus:border-none rounded ml-3 w-20 h-8 text-medium"
                  min={1}
                  value={quantityValue}
                  onChange={(e) => setQuantityValue(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="mt-8 flex border-t-2 w-full py-4">
                <span className={`${STYLES.text.text_secondary} text-lg`}>
                  Thành tiền:{' '}
                </span>
                <p
                  className={`${STYLES.text.text_orange} text-2xl font-bold ml-3 leading-6`}
                >
                  {(data.price * quantityValue).toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'VND',
                  })}
                </p>
              </div>
              {errMessage && (
                <p className={`${STYLES.text.text_orange} mb-3`}>
                  {errMessage}
                </p>
              )}
              <div className="mt-0 mb-20 flex">
                <Button
                  rouded
                  className="bg-cyan-600"
                  onClick={() => handleUpdateCart()}
                >
                  Cập nhật
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateCart;
