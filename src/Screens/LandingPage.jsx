import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Product from "../components/Product";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Slider />
      <Product />
      <Banner/>
      <Footer/>
    </>
  );
};

export default LandingPage;
