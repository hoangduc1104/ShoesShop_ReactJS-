import React from 'react';
import { BsSearch } from 'react-icons/bs';
import Button from '../../../../component/Button';

function Search(props) {
  return (
    <>
      <form className="flex flex-1 mx-20 h-12 my-auto rounded-full overflow-hidden max-w-2xl min-w-max">
        <input
          type="text"
          className="bg-gray-200 flex flex-1 focus:outline-none border-none outline-none px-5 text-lg font-light"
          placeholder="Nhập từ khoá cần tìm..."
        />
        <Button
          leftIcon={<BsSearch />}
          className="h-full"
          type="submit"
        ></Button>
      </form>
    </>
  );
}

export default Search;
