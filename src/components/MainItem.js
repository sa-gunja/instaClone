import styled from "styled-components";
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";

import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Pagination]);


function MainItem(props) {
  const users = props.users;
  return (
    <div>
      <div>
        <div>img</div>
        <div>{users.name}</div>
        <div>{users.follwState || "팔로우"}</div>
        <div>...</div>
      </div>
      <div>
      <Swiper spaceBetween={0} slidesPerView={1} pagination={{ clickable: true }}>
        <SwiperSlide>
          d
        </SwiperSlide>
      </Swiper>
      </div>

    </div>
  );
}

export default MainItem;