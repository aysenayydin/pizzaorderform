import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div className="h-[1080px] flex items-end bg-red w-[100%] flex-col justify-end items-center">
        <div className="bg-[url('/pizza-home.png')] bg-bottom md:bg-contain bg-cover bg-no-repeat md:h-full h-1/3 absolute flex justify-center md:w-[1363px] w-full">
          <img src="/spices.png" className="absolute top-60 hidden md:block" />
        </div>
        <div className="flex flex-col items-center mt-14 absolute top-0  text-white">
          <h1 className="font-londrina text-5xl">Teknolojik Yemekler</h1>
          <h2 className="font-roboto font-light text-7xl text-center leading-[5.5rem] mt-10 w-[398px] md:w-full">
            KOD ACIKTIRIR <br /> PİZZA, DOYURUR
          </h2>
          <Link to={`/order`}>
            {" "}
            <button className="bg-yellow text-black rounded-full w-[193px] h-14 font-barlow font-semibold mt-10">
              ACIKTIM
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
