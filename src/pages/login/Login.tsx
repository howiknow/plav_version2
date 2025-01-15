import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import Bg1 from "../../assets/image/Login_bg.png";
import Bg2 from "../../assets/image/Login_bg2.png";
import Bg3 from "../../assets/image/Login_bg3.png";
import Bg4 from "../../assets/image/Login_bg4.png";

const Login = () => {
  const navigate = useNavigate();
  const backgroundImages = [Bg1, Bg2, Bg3, Bg4];

  return (
    <div className="h-screen relative flex flex-col justify-center items-center">
      <Swiper
        autoplay={{ delay: 1000 }}
        pagination={{ clickable: true }}
        className="absolute top-0 left-0 w-full h-full z-0"
        loop={true}
      >
        {backgroundImages.map((bg, index) => (
          <SwiperSlide key={index}>
            <img
              src={bg}
              alt={`Background ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-0 w-full px-5 pb-16 z-10 mb-[55px]">
        <button
          className="text-base leading-relaxed font-Pretendard font-bold bg-login-button w-full rounded-[27px] py-3.5 shadow-drop-shadow text-button-font"
          onClick={() => {
            navigate("/login/auth");
          }}
        >
          로그인
        </button>
        <button
          className="opacity-60 text-base leading-relaxed font-Pretendard font-semibold w-full shadow-drop-shadow text-white mt-4"
          onClick={() => navigate("")}
        >
          로그인 없이 둘러보기
        </button>
      </div>
    </div>
  );
};

export default Login;
