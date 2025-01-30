import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { DynamicButtonProps } from "../types/components";

const DynamicButton = ({ text, className = "" }: DynamicButtonProps) => {
  return (
    <button
      className={`bg-button-color font-size-14 justify-center items-center text-Mono-Navy px-4 py-2 rounded-lg font-medium flex text-center ${className}`}
    >
      {text}
    </button>
  );
};

const SwipableDynamicButtons = ({
  buttons,
}: {
  buttons: DynamicButtonProps[];
}) => {
  return (
    <div className="pl-4 pt-2">
      <Swiper spaceBetween={10} slidesPerView="auto" className="w-full">
        {buttons.map((button, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <DynamicButton text={button.text} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export { DynamicButton, SwipableDynamicButtons };
