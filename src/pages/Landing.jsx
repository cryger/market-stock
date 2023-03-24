import { Link } from "react-router-dom";
import wave from "../images/wave.svg";
import image1 from "../images/imagelanding.png";
import image2 from "../images/landing2.png";

export default function Landing() {
  return (
    <div className="lg:flex  h-full flex justify-center mt-[60%] md:mt-0 min-[575px]:mt-[40%]">
      <div className="hidden lg:block w-[100%]">
        <img src={image1} alt="imagelanding" />
      </div>
      <div className="hidden md:block lg:hidden w-[70%] mt-[20%] ml-[-30px]">
        <img src={image2} alt="imagelanding" />
      </div>
      <div className="relative mx-auto z-10 my-auto md:mt-[35%] md:w-[50%] md:ml-[-20px] lg:mt-[20%] lg:ml-0">
        <h1 className="font-bold italic text-4xl text-[#83addf] md:text-[50px]">
          Market Store
        </h1>
        <Link to="/login">
          <button className="md:ml-[20%] text-2xl font-medium p-3 px-8 rounded-2xl mt-8 text-[#96c6fb] mx-[2.2rem] hover:bg-[#96c6fb] hover:text-white ">
            Log In
          </button>
        </Link>
      </div>
      <div className="absolute bottom-0 w-full md:hidden ">
        <img src={wave} alt="wave" className="w-full" />
      </div>
    </div>
  );
}
