import React, { useRef, useState } from 'react';
import { STYLES } from '../../constant';
import { Rating } from '@mui/material';
import { getToken, getUser } from '../../helper/auth';
import CommentService from '../../service/comment';

const Comment = ({ setRatingModal, product_id }) => {
  const [value, setvalue] = useState(0);
  const [imageFile, setimageFile] = useState(null);
  const [status, setStatus] = useState('');
  const [errMesage, setErrMesage] = useState(null);

  const ref = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (value === 0) {
      setErrMesage('Vui lòng không bỏ trống mục này!');
      return;
    }
    const data = {
      rate: value,
      status: status,
      image: imageFile?.name,
    };

    const query = {
      product_id: product_id,
      user_id: getUser()._id,
    };

    console.log(data);
    console.log(query);

    await CommentService.postComment(query, data, getToken());
    setRatingModal(false);
  };

  function handleImageSelect(event) {
    const selectedFile = event.target.files[0];
    setimageFile(event.target.files[0]);

    // sử dụng FileReader để đọc dữ liệu ảnh
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onload = function (event) {
      const imageUrl = event.target.result;

      // hiển thị ảnh được chọn lên HTML
      ref.current.src = imageUrl;
    };
  }
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        {errMesage && (
          <div className="flex ">
            <p className={`${STYLES.text.text_orange} text-xs`}>{errMesage}</p>
          </div>
        )}
        <div className="flex ">
          <h3
            className={`${STYLES.text.text_secondary} font-medium text-base my-auto`}
          >
            Chất lượng sản phẩm:
          </h3>
          <div className="flex-1">
            <div className="w-max mx-auto">
              <Rating
                size="large"
                onChange={(event, value) => setvalue(value)}
              />
            </div>
          </div>
        </div>

        <div className="w-full mb-4 mt-2 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              //   name="comment"
              rows="4"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Viết đánh giá..."
              required
            ></textarea>
          </div>
        </div>

        <div className="mt-3">
          <h3
            className={`${STYLES.text.text_secondary} font-medium text-base my-auto`}
          >
            Ảnh sản phẩm:
          </h3>
          <div className="flex-1">
            <input
              id="chose-avatar-input"
              type="file"
              name="file_upload"
              onChange={handleImageSelect}
              className="mt-2"
            />
            <div className="">
              <img ref={ref} className="max-w-[150px] max-h-[150px] mt-2" />
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            type="submit"
            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
          >
            Gửi
          </button>
          <button
            type="button"
            onClick={() => setRatingModal(false)}
            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          >
            Huỷ
          </button>
        </div>
      </form>
    </>
  );
};

export default Comment;
