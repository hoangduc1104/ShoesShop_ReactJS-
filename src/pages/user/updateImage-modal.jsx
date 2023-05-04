import { Button, Modal } from 'flowbite-react';
import React, { useRef, useState } from 'react';
import { getToken, getUser, setUser } from '../../helper/auth';
import UserService from '../../service/user';
import AuthService from '../../service/auth';

const ImageModal = ({ isShowModal, setIsShowModal }) => {
  const [imageFile, setimageFile] = useState(null);
  const ref = useRef(null);

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

  const handleUpload = async () => {
    var formData = new FormData();

    formData.append('picture', imageFile);
    await UserService.uploadImage(getUser()._id, formData, getToken());

    const data = {
      email: getUser().email,
      password: getUser().password,
    };
    const userReponse = await UserService.getByEmailuser(getUser().email);
    setUser(userReponse);
    setIsShowModal();
  };

  return (
    <React.Fragment>
      <Modal dismissible={false} show={isShowModal} onClose={setIsShowModal}>
        <Modal.Header>Ảnh đại diện</Modal.Header>
        <Modal.Body>
          <div className="w-[150px] h-[150px]">
            <img
              ref={ref}
              src={`${process.env.REACT_APP_BASE_URL}${'/user/profile-image/'}${
                getUser().image
              }`}
              className="w-[150px] h-[150px]"
            />
          </div>
          <input
            id="chose-avatar-input"
            type="file"
            name="file_upload"
            onChange={handleImageSelect}
            className="mt-2"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              handleUpload();
            }}
            className="bg-orange-600 hover:bg-orange-500"
          >
            Cập nhật
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default ImageModal;
