import React from "react";
import "./TanlovItem.css";

const data = [
  {
    sarlavha: "Texnopark Nima?",
    infoSarlavha: "Texnopark",
    info: `Bu ilm-fan, texnologiya va innovatsiyalar sohasida ishlayotgan kompaniyalar va tadqiqotchilar uchun yaratilgan maxsus hudud yoki kompleksdir.
Texnoparklarning asosiy maqsadi — yangi texnologiyalarni rivojlantirish, startaplar va innovatsion loyihalarni qo‘llab-quvvatlash, ilmiy izlanishlarni biznes bilan birlashtirishdir.`,
  },
  {
    sarlavha: "Texnoparkning Boshqalardan Ustunligi Nimada?",
    infoSarlavha: "Texnoparklar",
    info: `Innovatsion ekotizimga ega bo‘lib, kompaniyalarga ilmiy-texnik salohiyatni tezroq amaliyotga tatbiq etishga yordam beradi.
U yerda tadbirkorlar va startaplar uchun zamonaviy infratuzilma, soliq va moliyaviy imtiyozlar, ilmiy markazlar va tarmoq imkoniyatlari yaratilgan.
Bu esa ularga bozorga tezroq chiqish va xalqaro miqyosda raqobatbardosh bo‘lish imkonini beradi.`,
  },
  {
    sarlavha: "Texnopark Sizga Nima Beradi?",
    infoList: [
      "Zamonaviy ofislar va ishlab chiqarish maydonlari",
      "Soliq yengilliklari va moliyaviy qo‘llab-quvvatlash",
      "Startaplar va innovatsion loyihalar uchun grant va investitsiya imkoniyatlari",
      "Mentorlik, konsalting va texnik yordam xizmatlari",
      "Mahalliy va xalqaro kompaniyalar bilan hamkorlik va tajriba almashish imkoniyatlari",
      "Mahsulot va xizmatlaringizni tezroq va samarali tarzda bozorga olib chiqish sharoitlari",
    ],
  },
];

function TanlovItem() {
  return data.map((item, index) => (
    <div key={index} className="tanlov_card">
      <h2 className="sarlavha">{item.sarlavha}</h2>

      {
        <p>
          {item.infoSarlavha && <b>{item.infoSarlavha} —</b>}
          {item.info && item.info}
        </p>
      }

      {item.infoList && (
        <ul>
          {item.infoList.map((listItem, idx) => (
            <li key={idx}>{listItem}</li>
          ))}
        </ul>
      )}
    </div>
  ));
}

export default TanlovItem;
