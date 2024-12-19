import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import ProductsCards from "../../GenericComponent/ProductsCards";
import { PRODUCT_LAPTOP_BAG } from "./LaptopBag.const";

const LaptopBag = () => {
  return (
    <>
      <Header />
      <div className="px-20">
        <ProductsCards
          mainClass={'py-10'}
          headingClass={"text-3xl md:text-5xl text-center"}
          heading={"Our Laptop Bag Collection"}
          cardJson={PRODUCT_LAPTOP_BAG}
        />
      </div>
      <Footer />
    </>
  );
};

export default LaptopBag;
