import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Button from '../../component/Button';
import { STYLES } from '../../constant';
import logo from '../../logo.png';

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className={`bg-white dark:bg-gray-900 text-left`}>
        <div className="flex flex-col items-center justify-center px-6 py-4 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img className="w-40 h-auto mr-2" src={logo} alt="logo" />
          </a>
          <div
            className={`${STYLES.background.bg_secondary} w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700`}
          >
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 relative">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Đăng nhập
              </h1>
              <span
                className={`${STYLES.text.text_orange} cursor-pointer absolute font-lg text-2xl top-0 right-6 rounded-full w-10 h-10 hover:bg-orange-100`}
                onClick={() => navigate(-1)}
              >
                <AiOutlineClose className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
              </span>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-orange-600 focus:ring-orange-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400`}
                    placeholder="email"
                    required
                    autoFocus
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Mật khẩu
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-orange-600 focus:ring-orange-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
                    required
                  />
                </div>
                <div className="flex item-center justify-center">
                  <Button type="submit" rouded className="px-12">
                    Đăng nhập
                  </Button>
                </div>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Chưa có tài khoản?{' '}
                  <a
                    href="#"
                    className={`${STYLES.text.text_orange} font-lg  hover:underline dark:text-primary-500`}
                  >
                    Đăng ký
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
