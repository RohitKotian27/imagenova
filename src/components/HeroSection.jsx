import defaultImage from "./assets/default_image.jpg";
import LoadingBar from "./LoadingBar";

export default function HeroSection({ loading, imageUrl }) {
  return (
    <>
      <div className="text-bold text-4xl">
        AI Image <span className="text-cyan-400">Generator</span>
      </div>
      <div className="max-w-sm mt-10 mb-2">
        <img className="mb-3" src={imageUrl || defaultImage} alt="" />
        <LoadingBar loading={loading} />
      </div>
    </>
  );
}
