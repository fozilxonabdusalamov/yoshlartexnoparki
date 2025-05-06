import React from "react";
import "./About.css";

const images = [
  "https://yuz.uz/imageproxy/1200x/https://yuz.uz/file/news/30718faf9fa3a67a755c7a2def40c006.jpg",
  "https://storage.kun.uz/source/1/1b5h3jw4FUH3n91bSh3SXywKNagFZrIr.jpg",
  "https://cdn.uza.uz/2024/01/05/16/41/gcSpbgtgZE3qdQWUUpMyYbsvD14elmFm_front.jpg",
  "https://www.samdu.uz/upload/cover-images/630facf88e0f7-630facf88e0f9-630facf88e0fa-630facf88e0fb.jpg",
  "https://cdn1.img.sputniknews.uz/img/07e7/04/0b/33789040_0:95:1280:815_1920x0_80_0_0_ea2568b1d8d89c93bbd79b9f78c92152.jpg",
  "https://cdn1.img.sputniknews.uz/img/07e7/04/0b/33789040_0:95:1280:815_1920x0_80_0_0_ea2568b1d8d89c93bbd79b9f78c92152.jpg",
];

const groupImages = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i += 3) {
    result.push(arr.slice(i, i + 3));
  }
  return result;
};

function About() {
  const groupedImages = groupImages(images);
  const repeatedGroups = [...groupedImages, ...groupedImages, ...groupedImages];

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">
        <span>Foto</span> va <span>Video</span> lavhalar
      </h1>
      <div className="gallery-slider">
        <div className="slider-track">
          {repeatedGroups.map((group, index) => (
            <div className="image-block" key={index}>
              <div className="vertical-images">
                {group.slice(0, 2).map((src, idx) => (
                  <img key={idx} src={src} alt="" className="small-img" />
                ))}
              </div>
              {group[2] && <img src={group[2]} alt="" className="tall-img" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
