// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function SliderImgs(){

    const img1 =  "https://picsum.photos/300/200?ramdon=" + Math.random();
    const img2 =  "https://picsum.photos/300/200?ramdon=" + Math.random();
    const img3 =  "https://picsum.photos/300/200?ramdon=" + Math.random();
    const img4 =  "https://picsum.photos/300/200?ramdon=" + Math.random();
    const img5 =  "https://picsum.photos/300/200?ramdon=" + Math.random();
    const img6 =  "https://picsum.photos/300/200?ramdon=" + Math.random();
    const img7 =  "https://picsum.photos/300/200?ramdon=" + Math.random();
    const img8 =  "https://picsum.photos/300/200?ramdon=" + Math.random();
    const img9 =  "https://picsum.photos/300/200?ramdon=" + Math.random();
    const img10 =  "https://picsum.photos/300/200?ramdon=" + Math.random();


  return (
    <div style={{ marginTop: "100px" }}>
      <h1>Slider!</h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={60}
        slidesPerView={3}
        navigation
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        style={{ paddingBottom: "100px", marginTop: "50px" }}
      >
        <SwiperSlide>
          <img src={img1} alt="profile" style={{ borderRadius: "10px" }} />
          <div>Img 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="profile" style={{ borderRadius: "10px" }} />
          <div>Img 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="profile" style={{ borderRadius: "10px" }} />
          <div>Img 3</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="profile" style={{ borderRadius: "10px" }} />
          <div>Img 4</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="profile" style={{ borderRadius: "10px" }} />
          <div>Img 5</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="profile" style={{ borderRadius: "10px" }} />
          <div>Img 6</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="profile" style={{ borderRadius: "10px" }} />
          <div>Img 7</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} alt="profile" style={{ borderRadius: "10px" }} />
          <div>Img 8</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} alt="profile" style={{ borderRadius: "10px" }} />
          <div>Img 9</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img10} alt="profile" style={{ borderRadius: "10px" }} />
          <div>Img 10</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
