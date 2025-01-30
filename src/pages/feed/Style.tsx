import { SwipableDynamicButtons } from "../../components/DynamicButton";
import Header from "components/Header";
import Karinna from "../../assets/image/Karina.png";
import Home from "../../assets/svg/Home.svg";
import Plus from "../../assets/svg/Plus.svg";
import Profile from "../../assets/svg/Profile.svg";

interface StyleImage {
  id: number;
  src: string;
  alt: string;
  type: "grid" | "full";
}

const Style = () => {
  const buttons = [
    { text: "새들백" },
    { text: "리나일론 호보백" },
    { text: "짧은" },
    { text: "가방" },
    { text: "신발" },
    { text: "신발" },
    { text: "신발" },
    { text: "신발" },
  ];

  const styleImages: StyleImage[] = [
    { id: 1, src: Karinna, alt: "Style image 1", type: "grid" },
    { id: 2, src: Karinna, alt: "Style image 2", type: "grid" },
    { id: 3, src: Karinna, alt: "Style image 3", type: "grid" },
    { id: 4, src: Karinna, alt: "Style image 4", type: "grid" },
    { id: 5, src: Karinna, alt: "Style image 5", type: "grid" },
    { id: 6, src: Karinna, alt: "Style image 6", type: "grid" },
    { id: 7, src: Karinna, alt: "Style image 7", type: "grid" },
    { id: 8, src: Karinna, alt: "Style image 8", type: "grid" },
    { id: 9, src: Karinna, alt: "Full width style image", type: "full" },
  ];

  const renderImage = (image: StyleImage) => {
    if (image.type === "grid") {
      return (
        <img
          key={image.id}
          src={image.src}
          alt={image.alt}
          className="w-full aspect-square object-cover"
        />
      );
    }
    return (
      <img
        key={image.id}
        src={image.src}
        alt={image.alt}
        className="w-full px-4 pt-3"
      />
    );
  };

  return (
    <div className="bg-login-button flex flex-col h-full">
      <div className="h-[44px]"></div>
      <Header leftText="Style" rightText="Feed" />
      <p className="text-splash px-4 font-bold font-size-14">
        지금 많이 검색중인 아이템
      </p>
      <div className="pt-1">
        <SwipableDynamicButtons buttons={buttons} />
      </div>
      <div className="grid grid-cols-2 gap-1 px-4 pt-4">
        {styleImages.filter((img) => img.type === "grid").map(renderImage)}
      </div>
      {styleImages.filter((img) => img.type === "full").map(renderImage)}
      <div className="fixed bottom-0 left-0 right-0 border-t border-[#E5E8EB] border-[1px] max-w-[430px] mx-auto rounded-t-[24px] z-10 bg-white">
        <div className="flex justify-between items-center px-14 pt-4 pb-4">
          <button>
            <img src={Home} alt="Home" />
          </button>
          <button>
            <img src={Plus} alt="Add" />
          </button>
          <button>
            <img src={Profile} alt="Profile" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Style;
