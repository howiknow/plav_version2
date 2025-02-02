import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface ImageBannerProps {
  images: { image: string }[];
}

const ImageBanner = ({ images }: ImageBannerProps) => {
  return (
    <div className="w-full h-[84px] mb-4">
      <Swiper
        spaceBetween={12}
        slidesPerView="auto"
        className="w-full h-full !swiper-h"
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} className="!w-auto h-[84px] pl-2 pt-2">
            <button
              className="rounded-lg overflow-hidden h-full"
              onClick={() => {
                console.log(`Banner ${index + 1} clicked`);
              }}
            >
              <img
                src={item.image}
                alt={`banner-${index + 1}`}
                className="h-[84px] w-[296px] object-cover"
                loading="lazy"
              />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageBanner;
