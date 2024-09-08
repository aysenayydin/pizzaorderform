import React, { useState } from "react";

function Form() {
  const [size, setSize] = useState(["küçük", "orta", "büyük"]);
  const [breadType, setBreadType] = useState(["ince", "kalın"]);
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
    <div>
      <div>
        <h2>Position Absolute Acı Pizza</h2>
        <div>
          <div>
            <span>85.50₺</span>
          </div>
          <div>
            <span>4.9</span>
            <span>(200)</span>
          </div>
          <div>
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta
            denir.
          </div>
        </div>
      </div>
      <div>
        <div className="flex">
          <div>
            Boyut Seç <span>*</span>
            {size.map((s) => (
              <label htmlFor="size" className="block" key={s}>
                <input type="radio" name="size" /> {s}
              </label>
            ))}
          </div>
          <div>
            Hamur Seç <span>*</span>
            <label htmlFor="bread" className="block">
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
          <div>Ek Malzemeler</div>
          <h3>En Fazla 10 malzeme seçebilirsiniz. 5₺</h3>
        </div>
        <div>
          {extras.map((e) => (
            <label htmlFor="extra" key={e}>
              <input type="checkbox" />
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
  );
}

export default Form;
