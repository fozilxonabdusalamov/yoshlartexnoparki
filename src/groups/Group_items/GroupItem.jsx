import React from "react";
import "./GroupItem.css";
import fozilxon from "../../assets/fozilxon.jpg";
import Director from "./groupImage/director.png";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Jamoa ma'lumotlari
const groupData = [
  {
    id: 1,
    name: "Inamov Raxmatillo",
    image: Director,
    position: "Director",
    description:
      "Yoshlar texnoparki direktori texnalogiyalar va ta'lim soxasida tajribali mutaxasis bo'lib, yoshlarning zamonaviy bilim olishini qo'llab quvvatlaydi",
    contact: {
      email: "",
      facebook: "",
      instagram: "",
      telegram: "",
    },
  },
  {
    id: 1,
    name: "Inamov Raxmatillo",
    image: Director,
    position: "Director",
    description:
      "Yoshlar texnoparki direktori texnalogiyalar va ta'lim soxasida tajribali mutaxasis bo'lib, yoshlarning zamonaviy bilim olishini qo'llab quvvatlaydi",
    contact: {
      email: "",
      facebook: "",
      instagram: "",
      telegram: "",
    },
  },
  {
    id: 1,
    name: "Inamov Raxmatillo",
    image: Director,
    position: "Director",
    description:
      "Yoshlar texnoparki direktori texnalogiyalar va ta'lim soxasida tajribali mutaxasis bo'lib, yoshlarning zamonaviy bilim olishini qo'llab quvvatlaydi",
    contact: {
      email: "",
      facebook: "",
      instagram: "",
      telegram: "",
    },
  },
  {
    id: 1,
    name: "Inamov Raxmatillo",
    image: Director,
    position: "Director",
    description:
      "Yoshlar texnoparki direktori texnalogiyalar va ta'lim soxasida tajribali mutaxasis bo'lib, yoshlarning zamonaviy bilim olishini qo'llab quvvatlaydi",
    contact: {
      email: "",
      facebook: "",
      instagram: "",
      telegram: "",
    },
  },
  {
    id: 1,
    name: "Inamov Raxmatillo",
    image: Director,
    position: "Director",
    description:
      "Yoshlar texnoparki direktori texnalogiyalar va ta'lim soxasida tajribali mutaxasis bo'lib, yoshlarning zamonaviy bilim olishini qo'llab quvvatlaydi",
    contact: {
      email: "",
      facebook: "",
      instagram: "",
      telegram: "",
    },
  },
  {
    id: 1,
    name: "Inamov Raxmatillo",
    image: Director,
    position: "Director",
    description:
      "Yoshlar texnoparki direktori texnalogiyalar va ta'lim soxasida tajribali mutaxasis bo'lib, yoshlarning zamonaviy bilim olishini qo'llab quvvatlaydi",
    contact: {
      email: "",
      facebook: "",
      instagram: "",
      telegram: "",
    },
  },
];

function GroupItem() {
  return (
    <Swiper
      modules={[Navigation]}
      loop={true} // Infinite aylanish
      slidesPerView={4.2} // Bir vaqtning o'zida nechta ko'rinsin
      spaceBetween={1} // Slaydlar orasidagi masofa
      breakpoints={{
        1400: { slidesPerView: 4.2 },
        1280: { slidesPerView: 3.7 },
        1200: { slidesPerView: 3.4 },
        1100: { slidesPerView: 3.2 },
        1050: { slidesPerView: 3 },
        1000: { slidesPerView: 2.8 },
        950: { slidesPerView: 2.6 },
        900: { slidesPerView: 2.5 },
        850: { slidesPerView: 2.35 },
        815: { slidesPerView: 2.25 },
        800: { slidesPerView: 2.15 },
        780: { slidesPerView: 2.1 },
        745: { slidesPerView: 2.2 },
        710: { slidesPerView: 2.1 },
        690: { slidesPerView: 2.05 },
        670: { slidesPerView: 2 },
        640: { slidesPerView: 1.9 },
        615: { slidesPerView: 1.8 },
        600: { slidesPerView: 1.7 },
        550: { slidesPerView: 1.5 },
        500: { slidesPerView: 1.3 },
        450: { slidesPerView: 1.3 },
        400: { slidesPerView: 1.15 },
        380: { slidesPerView: 1.1 },
        300: { slidesPerView: 1 },
      }}
    >
      {groupData.map((member) => (
        <SwiperSlide key={member.id}>
          <div className="group_card">
            <img
              src={member.image}
              alt={member.name}
              className="profile_image"
            />
            <div className="social_links">
              <div className="name_position">
                <h2>{member.name}</h2>
                <p>{member.position}</p>
              </div>
              <p className="description">{member.description}</p>
              <div className="links">
                <a href={`mailto:${member.contact.email}`}>
                  <MdEmail />
                </a>
                <a href={member.contact.facebook}>
                  <FaFacebook />
                </a>
                <a href={member.contact.instagram}>
                  <FaInstagram />
                </a>
                <a href={member.contact.github}>
                  <IoLogoGithub />
                </a>
                <a href={member.contact.telegram}>
                  <FaTelegram />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default GroupItem;
