import { useState, useRef } from "react";
import InputForm from "./InputForm";
import HeroSection from "./HeroSection";
import DownloadImage from "./DownloadImage";

export default function ImageGenerator() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const imageGenerator = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(
      "https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_IMAGE_GEN_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: inputRef.current.value }),
      }
    );
    const data = await response.blob();
    const objectUrl = URL.createObjectURL(data);
    setImageUrl(objectUrl);
    setLoading(false);
    inputRef.current.value = "";
  };
  return (
    <section className="bg-gradient-to-r from-slate-900 to-slate-950 h-screen flex flex-col justify-center items-center text-white px-4">
      <HeroSection loading={loading} imageUrl={imageUrl} />
      <InputForm
        loading={loading}
        inputRef={inputRef}
        imageGenerator={imageGenerator}
      />
      <DownloadImage imageUrl={imageUrl} />
    </section>
  );
}
