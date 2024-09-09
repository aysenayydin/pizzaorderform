import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Form() {
  const extras = [
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
  ];
  const [size, setSize] = useState(["küçük", "orta", "büyük"]);
  const [breadType, setBreadType] = useState(["ince hamur", "kalın hamur"]);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [name, setName] = useState("");

  function handleNameChange(event) {
    const name = event.target.value;
    setName(name);
  }

  function handleSelectExtras(event) {
    const { type, checked, value } = event.target;
    console.log(event);
    if (checked) {
      setSelectedExtras([...selectedExtras, value]);
    } else {
      const newSelectedExtras = selectedExtras.filter((a) => a !== value);
      setSelectedExtras(newSelectedExtras);
    }
  }

  useEffect(() => {
    console.log(selectedExtras);
  }, [selectedExtras]);

  return (
    <div className="flex flex-col items-center h-[1340px] ">
      <div className="w-[532px] font-barlow">
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
          <div className="mt-4">
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
                  <input
                    type="checkbox"
                    className="mr-1"
                    onChange={handleSelectExtras}
                    value={e}
                  />
                  {e}
                </label>
              ))}
            </div>
            <div className=" mt-10">
              <h2>İsim-Soyisim</h2>
              <input
                type="text"
                name="name"
                className="border"
                onChange={handleNameChange}
              />
              <h3 className="font-semibold text-[20px] mb-4 leading-[24px] ">
                Sipariş Notu
              </h3>
              <div className="border w-[531px] h-[56px] p-2 rounded-md flex mb-9">
                <textarea
                  className=" w-full "
                  placeholder="Siparişine eklemek istediğin bir not var mı?"
                />
              </div>

              <hr className="mb-10" />
            </div>
            <div className="flex justify-between items-start ">
              <div className="flex ">
                <button className="w-[56px] h-[56px] flex items-center justify-center bg-yellow rounded-l-lg">
                  -
                </button>
                <div className="w-[56px] h-[56px] flex items-center justify-center border-slate-200 border">
                  1
                </div>
                <button className="w-[56px] h-[56px] flex items-center justify-center bg-yellow rounded-r-lg">
                  +
                </button>
              </div>
              <div className="w-[350px]  border-slate-200 border rounded-md flex flex-col justify-center -items-center ">
                <h3 className="font-semibold text-[20px] leading-[24px] mb-[22px] pt-[42px] -[50px]">
                  Sipariş Toplamı
                </h3>
                <div className="flex flex-col gap-3 py-[42px] px-[50px]">
                  <div className="flex justify-between">
                    Seçimler <span>25.00₺</span>
                  </div>
                  <div className="flex justify-between text-red">
                    Toplam <span>110.50₺</span>
                  </div>
                </div>
                <Link to={`/success`}>
                  {" "}
                  <button
                    className="h-[62px] rounded-md w-full bg-yellow "
                    disabled={
                      name.length < 3 &&
                      (selectedExtras.length < 4 || selectedExtras.length > 10)
                    }
                  >
                    SİPARİŞ VER
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
