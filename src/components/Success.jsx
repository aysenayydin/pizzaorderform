import React from "react";
import { useLocation } from "react-router-dom";
import OrderSummary from "./OrderSummary";
import Footer from "./Footer";
import Header from "./Header";

function Success() {
  const location = useLocation();
  const { orderSummary, totalPrice, totalSelections } = location.state || {}; // Eğer state yoksa boş bir nesne dön

  return (
    <>
      <Header />
      <div className="bg-red w-screen flex flex-col justify-center items-center">
        <div className="font-satisfy text-yellow text-4xl pb-10">
          lezzetin yolda
        </div>
        <h2 className="text-white md:text-8xl text-7xl text-center font-roboto font-light border-b border-white pb-20 ">
          SİPARİŞİN ALINDI!
        </h2>
        <div className="text-white text-xl pt-10 ">
          <div>
            <span className="font-light">Boyut: </span>
            <span className=" font-bold">{orderSummary.boyut}</span>
          </div>
          <div>
            <span className="font-light"> Hamur Tipi: </span>
            <span className="font-bold">{orderSummary.hamurTipi}</span>
          </div>
          <div>
            <span className="font-light"> Ek Malzemeler: </span>
            <span className="font-bold">
              {orderSummary.malzemeler.join(",")}
            </span>
          </div>
        </div>
        <div className="pt-14 mb-40">
          <OrderSummary
            totalSelections={totalSelections}
            totalPrice={totalPrice}
            page={"sonuc"}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Success;
