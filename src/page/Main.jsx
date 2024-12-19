import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import NavBar from '../components/NavBar.jsx';
import MainBanner from '../components/MainBanner.jsx';
import NewProduct from '../components/NewProduct.jsx';
import Bestseller from '../components/Bestseller.jsx';

const Main = () => {
  const [navbarTap, setNavbarTap] = useState("WOMEN");

  const TabHandlerNavbar = (tab) => {
    setNavbarTap(tab);
  };

  const productTxt = [
    { title: "New Product", description: "8Seconds with your winter" },
    { title: "Best seller", description: "The most loved 8Seconds" },
  ];

  return (
    <div>
      <Header navbarTap={navbarTap} onTabClick={TabHandlerNavbar} />
      <NavBar navbarTap={navbarTap} />
      <MainBanner navbarTap={navbarTap} />
      <NewProduct
        buttonList={
          navbarTap === "WOMEN"
            ? ['clothes', 'bag', 'shoes']
            : ['clothes', 'bag', 'gloves']
        }
        navbarTap={navbarTap}
        productTxt={productTxt}
      />
      <Bestseller
        buttonList={['clothes', 'bag', 'accessories']}
        productTxt={productTxt}
      />
    </div>
  );
};

export default Main;
