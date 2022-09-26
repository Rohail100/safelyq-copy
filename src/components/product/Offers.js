import React from "react";
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import { Slide, Gap, Card, IconButton, Portfolio  } from "./StyledComponents";

function Offers() {
  return (
    <div className="box">
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Slide>
          <Gap></Gap>
            <Card className="">
              <h6 className="m-1 title is-6">Discount</h6>
              <small>Hello coupon is offe...</small>
              <br />
              <small className="has-text-grey-light">Expires: 07/01/2023</small>
              <br />
              <IconButton className="mt-2 mr-2 button-icon is-active button is-small">
                <span className="icon">
                  <i name="heart-o" className="fa fa-heart-o"></i>
                </span>
              </IconButton>
              <IconButton className="mt-2 button-icon is-active button is-small">
                <span className="icon">
                  <i name="eye" className="fa fa-eye"></i>
                </span>
              </IconButton>
            </Card>
          </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide>
            <Portfolio></Portfolio>
            <Card>
              <h6 className="m-1 title is-6">Discount</h6>
              <small>This is coupon summa...</small>
              <br />
              <small className="has-text-grey-light">Expires: 04/10/2022</small>
              <br />
              <IconButton className="mt-2 mr-2 button-icon is-active button is-small">
                <span className="icon">
                  <i name="heart-o" className="fa fa-heart-o"></i>
                </span>
              </IconButton>
              <IconButton className="mt-2 button-icon is-active button is-small">
                <span className="icon">
                  <i name="eye" className="fa fa-eye"></i>
                </span>
              </IconButton>
            </Card>
          </Slide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Offers;
