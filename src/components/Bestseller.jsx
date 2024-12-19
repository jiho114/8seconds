import React, { useState } from 'react';
import ProductText from './ProductText';
import ProductBtn from './ProductBtn';
import { FaPlus } from "react-icons/fa6";
import './Bestseller.css'

const Bestseller = ({ productTxt, buttonList }) => {
  const [activeButton, setActiveButton] = useState('clothes');

  const handleButtonClick = (btnName) => {
    setActiveButton(btnName);
  };

  return (
    <div className="bestseller">
      <ProductText
        title={productTxt[1].title}
        description={productTxt[1].description}
      />
      <ProductBtn
        buttonList={buttonList}
        activeButton={activeButton}
        onButtonClick={handleButtonClick} // 독립적인 핸들러 전달
      />
      <FaPlus className='icon'></FaPlus>
    </div>
  );
};

export default Bestseller;
