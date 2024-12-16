import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Product from "../components/Product";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Promotion from "../components/Promotion";
import MainSlider from "../components/MainSlider";

const LandingPage = () => {
  return (
    <>
      <Header />
      <MainSlider />
      {/* <Slider /> */}
      {/* <Banner/> */}
      <Product />
      <Promotion />
      <Footer />
    </>
  );
};

export default LandingPage;
