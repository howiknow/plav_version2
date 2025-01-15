import Dot from "../../assets/svg/Dot.svg";
import Bell from "../../assets/svg/Bell.svg";
import DynamicButton from "../../components/DynamicButton";
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
      <div className="pl-4 pt-2 flex gap-2">
        <DynamicButton text="새들백" />
        <DynamicButton text="긴 이름의 아이템" className="" />
        <DynamicButton text="짧은" className="" />
      </div>
    </div>
  );
};

export default Feed;
