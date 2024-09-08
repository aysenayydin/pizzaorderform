import React from "react";

function Header() {
  return (
    <div>
      <div className="bg-red h-[207px] flex justify-center items-center relative ">
        <h1 className="font-londrina text-white text-4xl">
          Teknolojik Yemekler
        </h1>
        <div className="absolute bottom-0 ">
          <div className="w-[532px] relative">
            <div className="absolute bottom-[21px] left-0 text-white text-[16px]">
              Anasayfa-Sipariş Oluştur
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
