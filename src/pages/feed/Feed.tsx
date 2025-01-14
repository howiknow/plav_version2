import Dot from "../../assets/svg/Dot.svg";
import Bell from "../../assets/svg/Bell.svg";

const Feed = () => {
  return (
    <div className="bg-login-button flex flex-col h-full">
      <div className="h-[44px]"></div>
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center">
          <button className="font-bold">Style</button>
          <img src={Dot} className="px-2.5" alt="Dot Icon" />
          <button className="font-bold text-gray-04">Feed</button>
        </div>
        <img src={Bell} alt="Bell Icon" className="" />
      </div>
      <p className="text-splash px-4 font-bold font-size-14">
        지금 많이 검색중인 아이템
      </p>
      <div className="pl-4 pt-2">
        <button className="bg-button-color font-size-14 justify-center items-center text-Mono-Navy w-[53px] h-[38px] rounded-lg font-medium flex">
          새들백
        </button>
      </div>
    </div>
  );
};

export default Feed;
