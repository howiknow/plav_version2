import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import Banner1 from "../../assets/image/Banner.png";
import Banner2 from "../../assets/image/Banner2.png";
import Banner3 from "../../assets/image/Banner3.png";
import Banner4 from "../../assets/image/Banner4.png";
import Banner5 from "../../assets/image/Banner5.png";
import ImageBanner from "../../components/ImageBanner";

const Feed = () => {
  const navigate = useNavigate();

  const bannerImages = [
    { image: Banner1 },
    { image: Banner2 },
    { image: Banner3 },
    { image: Banner4 },
    { image: Banner5 },
  ];

  return (
    <div className="bg-login-button flex flex-col h-full relative">
      <div className="overflow-y-auto pb-[80px] bg-login-button">
        <Header
          leftText="Style"
          rightText="Feed"
          activeTab="right"
          onLeftClick={() => navigate("/style")}
          onRightClick={() => {}}
        />
        <p className="text-splash px-4 font-bold font-size-14">
          지금 많이 검색중인 아이템
        </p>
        <ImageBanner images={bannerImages} />
      </div>
      <Footer />
    </div>
  );
};

export default Feed;
