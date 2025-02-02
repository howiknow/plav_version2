import CardImage from "../assets/image/profile_image.jpg";
import FeedImage from "../assets/image/Feed_image.png";
import Love from "../assets/svg/Love.svg";
import Comment from "../assets/svg/Comment.svg";

const Card = () => {
  return (
    <div className="pt-4 bg-login-button">
      <div className="pl-2 flex">
        <img src={CardImage} className="rounded-[613.52px] w-[44px] h-[44px]" />
        <div className="flex flex-col pl-2.5 stroke-">
          <p className="text-gray-01 font-Pretendard font-bold font-size-14">
            chlsyou
          </p>
          <p className="text-gray-04 font-Pretendard font-normal text-xs">
            1일전
          </p>
        </div>
      </div>
      <img src={FeedImage} className="w-full h-full object-cover pt-2" />
      <p className="pt-3 px-4 font-medium text-gray-01">
        오랜만에 바다가서 힐링했어요~ 보테가 베네타 패딩 카세트백은 데일리하게
        메고 다니기 너무 좋은 것 같아요!
      </p>
      <div className="flex pt-2 pl-3.5">
        <img src={Love}></img>
        <p className="text-gray-04 font-Pretendard font-medium">100</p>
        <div className="flex items-center pl-3 gap-1">
          <img src={Comment}></img>
          <p className="text-gray-04 font-Pretendard font-medium">16</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
