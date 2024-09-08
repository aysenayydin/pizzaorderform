import React from "react";

function Home() {
  return (
    <div className="h-[1080px] flex items-end bg-red w-[100%] flex-col justify-end items-center">
      <div className="bg-[url('/pizza-home.png')] bg-bottom md:bg-contain bg-cover bg-no-repeat md:h-full h-1/3 absolute flex justify-center md:w-[1363px] w-full">
        <img src="/spices.png" className="absolute h-[85%] hidden md:block" />
      </div>
      <div className="flex flex-col items-center pt-[107px] absolute top-0  text-white">
        <h1 className="font-londrina text-[50px]">Teknolojik Yemekler</h1>
        <h2 className="font-roboto font-light text-[86px] text-center leading-[92px] mt-10 w-[398px] md:w-full">
          KOD ACIKTIRIR <br /> PİZZA, DOYURUR
        </h2>
        <button className="bg-yellow text-black rounded-[50px] w-[193px] h-[56px] font-barlow font-semibold mt-10">
          ACIKTIM
        </button>
      </div>
    </div>
  );
}

export default Home;
