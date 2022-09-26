import React from "react";
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import styled from 'styled-components';
import "swiper/css";
import 'swiper/css/pagination';

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

const Slide = styled.div`
display: flex;
height: 160px;
`
const Gap = styled.div`
width: 31.5%;
margin-right: 0px;
color: white;
padding: 0px;
`

const Card = styled.div`
width: 35%;
border: 1px solid rgba(0, 0, 0, 0.07);
text-align: center;
padding: 10px 5px;
`

const Portfolio = styled.div`
width: 65%;
background: url(http://res.cloudinary.com/safelyq/image/upload/v1635144319/PRODUCTION/65/1/dkd1vhdhcruh4xpdpceo.png) center center / contain no-repeat rgb(255, 255, 255);
margin-right: 5px;
color: white;
padding: 15px;
`

const IconButton = styled.button`
background-color: rgba(66,166,238,.2);
border: 1px solid rgba(66,166,238,.2)!important;
height: 20px;
`

export default Offers;
