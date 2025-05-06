import React from "react";
import "./News.css";
import oneStudy from "./image/one.jpg";
import twoStudy from "./image/two.jpg";
import threeStudy from "./image/three.jpg";
import fourStudy from "./image/four.jpg";

const data = [
  {
    id: 1,
    image: oneStudy,
    infoName: `“Namangan yoshlar texnoparki tomonidan "InnoX" biznes-inkubator va akselerator dasturiga targ'ibot ishlari olib borilmoqda`,
    info: `2025-yil 5-may kuni "Namangan Yoshlar Texnoparki" direktori R.Inamov boshchiligida mas'ul xodimlar tomonidan Namangan davlat universiteti talabalari uchun "Namangan Yoshlar Texnoparki" faoliyati toʻgʻrisida taqdimot oʻtkazildi.`,
  },
  {
    id: 2,
    image: twoStudy,
    infoName: `“Namangan yoshlar texnoparki tomonidan "InnoX" biznes-inkubator va akselerator dasturiga targ'ibot ishlari olib borilmoqda`,
    info: `Tadbir davomida ishtirokchilarga mazkur maskanda yoshlar uchun yaratilayotgan imkoniyatlar, zamonaviy infratuzilmalar hamda "InnoX" dasturi doirasida tashkil etiladigan treninglar va amaliyot jarayonlari bo'yicha toʻliq maʼlumotlar berildi`,
  },
  {
    id: 2,
    image: threeStudy,
    infoName: `“Namangan yoshlar texnoparki tomonidan "InnoX" biznes-inkubator va akselerator dasturiga targ'ibot ishlari olib borilmoqda`,
    info: `Ushbu jarayonda Namangan davlat universiteti mas'ullari hamda talabalari faol ishtirok etdilar va o'zlarini qiziqtirgan savollarga batafsil javob oldilar.`,
  },
  {
    id: 2,
    image: fourStudy,
    infoName: `“Namangan yoshlar texnoparki tomonidan "InnoX" biznes-inkubator va akselerator dasturiga targ'ibot ishlari olib borilmoqda`,
    info: `Targ'ibot ishlari davom etmoqda.`,
  },
];

function News() {
  return (
    <div className="news">
      <h1>
        Texnoparkdagi <span>so‘nggi yangiliklar</span>
      </h1>
      <div className="news_container">
        {data.map((item, index) => (
          <div key={index} className="news_c_items">
            <img src={item.image} alt={item.infoName} />
            <div>
              <b>{item.infoName}</b>
              <p>{item.info}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <button className="yana">Yana</button> */}
    </div>
  );
}

export default News;
