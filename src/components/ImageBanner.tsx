import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface ImageBannerProps {
  images: { image: string }[];
}

const ImageBanner = ({ images }: ImageBannerProps) => {
  return (
    <div className="w-full h-full">
      <Swiper
        spaceBetween={12}
        slidesPerView="auto"
        className="w-full h-full"
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <button
              className="rounded-lg overflow-hidden pl-2 pt-2"
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
