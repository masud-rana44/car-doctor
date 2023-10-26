import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@radix-ui/themes";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const images = [img5, img1, img2, img3, img4, img6];

const Banner = () => {
  return (
    <div className="max-h-[600px] overflow-hidden">
      <Swiper
        className="mySwiper rounded-lg"
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx} className="relative">
            <img
              className="h-[561px] w-full object-cover"
              src={img}
              alt="banner"
            />
            <div className="absolute w-full inset-y-0 bg-gradient-to-r from-black/80 to-black/10" />
            <div className="absolute left-20 top-[20%] text-white max-w-sm space-y-6">
              <h1 className="text-6xl font-bold mb-4">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-base font-light">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex items-center space-x-7">
                <Button size="3" color="orange" variant="classic">
                  Discover More
                </Button>
                <Button
                  style={{ color: "white", border: "1px solid white" }}
                  size="3"
                  variant="outline"
                  highContrast
                >
                  Latest Project
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
