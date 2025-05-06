import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Registration.css";

const TELEGRAM_TOKEN = "7592332366:AAHxhlomZqZvVEgTPi8O44UQVs-neZePjrI";
const CHAT_ID = "6201406761";
const TELEGRAM_URL = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

const FIELDS = [
  "Qishloq xo‘jaligi",
  "Tibbiyot va biotexnologiya",
  "I.T. texnologiya",
  "Geologiya/geofizika",
  "Fizika va kimyo",
  "To‘qimachilik va yengil sanoat",
  "Kimyo va neftgaz texnologiyalari",
  "Metallurgiya texnologiyalari",
  "Boshqa ma’lumot uchun",
];

function Registration() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;
    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);

    const data = {};
    formData.forEach((value, key) => {
      if (key === "projectImage" || key === "presentation") return;
      data[key] = data[key]
        ? Array.isArray(data[key])
          ? [...data[key], value]
          : [data[key], value]
        : value;
    });

    const message = Object.entries(data)
      .map(
        ([key, val]) => `${key}: ${Array.isArray(val) ? val.join(", ") : val}`
      )
      .join("\n");

    try {
      const response = await fetch(TELEGRAM_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text: message }),
      });

      if (response.ok) {
        toast.success("Ma'lumot muvaffaqiyatli yuborildi!");
        form.reset();
      } else {
        throw new Error("Telegram serveridan xatolik.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Xatolik yuz berdi. Iltimos, qayta urinib ko‘ring.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register">
      <h1>"InnoX" biznes-inkubator va akselerator dasturi</h1>
      <p>
        Ro‘yxatdan o‘tish uchun ma’lumotlaringizni to‘liq kiritishingizni so‘rab
        qolamiz!
      </p>

      <form onSubmit={handleSubmit}>
        <Input label="Ism Familiya" id="fullname" name="fullname" required />

        <RadioGroup
          label="Jinsingizni kiriting"
          name="gender"
          options={[{ value: "Erkak" }, { value: "Ayol" }]}
        />

        <Input
          label="Tug‘ilgan sanangiz"
          id="birthdate"
          name="birthdate"
          type="date"
          required
        />
        <Input
          label="Yashash manzilingiz"
          id="address"
          name="address"
          required
        />
        <Input
          label="Telefon raqamingiz"
          id="phone"
          name="phone"
          type="tel"
          defaultValue="+998"
          required
        />
        <Input
          label="Startap loyihangiz nomi"
          id="projectName"
          name="projectName"
          required
        />

        <CheckboxGroup
          label="Startap yo‘nalishlari"
          name="fields"
          options={FIELDS}
        />

        <TextArea
          label="Startap loyihangiz haqida (200 so‘zgacha)"
          id="description"
          name="description"
          maxLength={200}
          required
        />

        <Input
          label="Inkubatordan maqsadingiz"
          id="purpose"
          name="purpose"
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Yuborilmoqda..." : "Yuborish"}
        </button>
      </form>
      <ToastContainer position="top-center" closeButton={false} />
    </div>
  );
}

export default Registration;

const Input = ({
  label,
  id,
  name,
  type = "text",
  defaultValue = "",
  required,
}) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      name={name}
      type={type}
      defaultValue={defaultValue}
      required={required}
    />
  </div>
);

const TextArea = ({ label, id, name, rows = 4, maxLength = 200, required }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <textarea
      id={id}
      name={name}
      rows={rows}
      maxLength={maxLength}
      required={required}
    />
  </div>
);

const RadioGroup = ({ label, name, options }) => (
  <div>
    <label>{label}</label>
    {options.map((opt, i) => (
      <div key={i} className="yonMaYon">
        <input
          type="radio"
          id={`${name}-${opt.value}`}
          name={name}
          value={opt.value}
          required
        />
        <label htmlFor={`${name}-${opt.value}`}>{opt.value}</label>
      </div>
    ))}
  </div>
);

const CheckboxGroup = ({ label, name, options }) => (
  <div>
    <label>{label}</label>
    {options.map((val, i) => (
      <div key={i} className="yonMaYon">
        <input type="checkbox" id={`field-${i}`} name={name} value={val} />
        <label htmlFor={`field-${i}`}>{val}</label>
      </div>
    ))}
  </div>
);
