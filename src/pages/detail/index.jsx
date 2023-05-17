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
import Rating from './ratings';
import p1 from '../../p1.jpg';
import Modal from '../../component/Modal';
import CommentService from '../../service/comment';
import io from 'socket.io-client';
import { comment } from 'postcss';

const Detail = () => {
  const [cartState, cartDispatch] = useCart();

  const location = useLocation();
  const navigate = useNavigate();
  const [showBar] = useOutletContext();
  const [colorValue, setColorValue] = useState(null);
  const [data, setData] = useState({});
  const [sizeValue, setSizeValue] = useState(null);
  const [quantityValue, setQuantityValue] = useState(1);
  const [loadding, setLoadding] = useState(false);
  const [errMessage, setErrMessage] = useState();
  const [ratingModal, setRatingModal] = useState(false);

  const getData = async () => {
    const reponse = await ProductService.getById(location.state?.id);
    setData(reponse);
  };

  useEffect(() => {
    getData();
  }, [location.state]);

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

  const handleAddToCart = async () => {
    if (!getUser()) {
      navigate('/login', { replace: true });
      return;
    }

    if (!colorValue) {
      setErrMessage('Vui lòng chọn màu!');
      return;
    }

    if (!sizeValue) {
      setErrMessage('Vui lòng chọn size!');
      return;
    }
    setErrMessage(null);
    const datas = {
      product: data._id,
      quantity: quantityValue,
      color: colorValue,
      size: sizeValue,
    };
    setLoadding(true);
    const reponse = await CartService.addtocart(
      getUser()._id,
      datas,
      getToken()
    );
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

  //Comment
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const socket = io('http://localhost:3002');

    socket.on('newComment', (comment) => {
      setComments((prevComments) => [...prevComments, comment]);
    });

    loadComments();

    return () => {
      // Ngừng lắng nghe khi component bị hủy
      socket.off('newComment');
    };
  }, []);

  const loadComments = async () => {
    const response = await CommentService.getAllCommentByProduct(
      location.state?.id
    );
    setComments(response);
  };

  return (
    <>
      <div className="h-max">
        <div
          className={`${
            showBar ? '' : 'md:grid md:grid-cols-5'
          } lg:grid lg:grid-cols-5 gap-8  border-b-2 border-b-solid`}
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
              <div className="mt-0 mb-8 flex">
                <Button
                  rouded
                  onClick={() =>
                    getToken()
                      ? setRatingModal(true)
                      : navigate('/login', { replace: true })
                  }
                >
                  Mua
                </Button>
                <div className="ml-10">
                  <Button
                    rouded
                    className="bg-cyan-600"
                    onClick={() => handleAddToCart()}
                  >
                    Thêm vào giỏ
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rating text-left my-8">
          <div className="flex">
            <h3 className="text-lg font-medium">ĐÁNH GIÁ SẢN PHẨM</h3>
            <span
              className={`${STYLES.text.text_secondary} pb-0 items-end ml-4 `}
            >
              ({comments.length}) đánh giá.
            </span>
          </div>
          {comments?.map((comment) => (
            <div className="mt-6" key={comment._id}>
              <Rating image={p1} comment={comment} />
            </div>
          ))}
        </div>
      </div>
      <Modal
        ratingModal={ratingModal}
        setRatingModal={(value) => setRatingModal(value)}
        product={data}
      />
    </>
  );
};

export default Detail;
