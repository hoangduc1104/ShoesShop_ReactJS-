import React from 'react';
import { BsSearch } from 'react-icons/bs';
import Button from '../../component/Button';
import DropdownComponent from '../../component/Dropdown';
import { STYLES } from '../../constant';

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
