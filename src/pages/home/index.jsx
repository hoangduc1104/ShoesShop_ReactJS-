import React from 'react';
import { STYLES } from '../../constant/style';
import { BsSearch } from 'react-icons/bs';
import Button from '../../component/Button';
import DropdownComponent from '../../component/Dropdown';

const HomePage = () => {
  return (
    <div className={`${STYLES.background.bg_secondary} h-max`}>
      <p>HomePage</p>

      <Button leftIcon={<BsSearch />}>abc</Button>
      <DropdownComponent />
    </div>
  );
};

export default HomePage;
