import React, { useState } from "react";

function Form() {
  const [size, setSize] = useState(["küçük", "orta", "büyük"]);
  const [breadType, setBreadType] = useState(["ince hamur", "kalın hamur"]);
  const [extras, setExtras] = useState([
    "Pepperoni",
    "Tavuk Izgara",
    "Mısır",
    "Sarımsak",
    "Ananas",
    "Sosis",
    "Soğan",
    "Sucuk",
    "Biber",
    "Kabak",
    "Kanada Jambonu",
    "Domates",
    "Jalepeno",
    "Sucuk",
  ]);
  return (
    <div className="flex flex-col items-center h-[1340px] font-barlow">
      <div className="w-[532px]">
        <h2 className=" leading-[29px] font-semibold text-[22px] mt-8 h-[56px]">
          Position Absolute Acı Pizza
        </h2>
        <div>
          <div className="flex gap-80 items-center">
            <div>
              <span className="text-[28px] leading-[37px] font-bold ">
                85.50₺
              </span>
            </div>
            <div className="flex gap-14">
              <span>4.9</span>
              <span>(200)</span>
            </div>
          </div>
          <div className="mt-4 font-barlow">
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta
            denir.
          </div>
          <div>
            <div className="flex gap-32 mt-10 w-[420px] ">
              <div className="flex flex-col gap-4">
                <span className="font-semibold text-[20px]">
                  Boyut Seç
                  <span className="text-red ">*</span>
                </span>

                {size.map((s) => (
                  <label htmlFor="size" className="block" key={s}>
                    <input type="radio" name="size" /> {s}
                  </label>
                ))}
              </div>
              <div className="leading-[29px] ">
                <span className=" font-semibold text-[20px]">
                  Hamur Seç<span className="text-red ">*</span>
                </span>

                <label htmlFor="bread" className="block border">
                  <select name="bread">
                    {breadType.map((b) => (
                      <option value={b} key={b}>
                        {b}
                      </option>
                    ))}{" "}
                  </select>
                </label>
              </div>
            </div>

            <div>
              <div className="mt-10 font-semibold text-[20px] leading-[24px] mb-3">
                Ek Malzemeler
              </div>
              <h3>En Fazla 10 malzeme seçebilirsiniz. 5₺</h3>
            </div>
            <div className="flex flex-wrap gap-5 w-[500px] mt-10 font-bold text-[16px] text-[#5F5F5F]">
              {extras.map((e) => (
                <label className="basis-36" htmlFor="extra" key={e}>
                  <input type="checkbox" className="mr-1" />
                  {e}
                </label>
              ))}
            </div>
            <div>
              <h3>Sipariş Notu</h3>
              <textarea />
              <hr />
            </div>
            <div>
              <div className="flex">
                <button>-</button>
                <div>1</div>
                <button>+</button>
              </div>
              <div>
                <h3>Sipariş Toplamı</h3>
                <div>
                  <div>Seçimler</div> <div>25.00₺</div>
                  <div>Toplam</div> <div>110.50₺</div>
                </div>
                <button>SİPARİŞ VER</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
