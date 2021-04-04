import styled from "styled-components";
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Pagination]);

const Userheader = styled.div`
  width:100%;
  height:50px;

  &::after{
    content: "";
    display:block;
    clear:both;
  }
`;


function MainItem(props) {
  const users = props.users;
  return (
    <div>
      <Userheader>
        <div className="userName">img</div>
        <div className="">{users.name}</div>
        <div>{users.follwState || "팔로우"}</div>
        <div>...</div>
      </Userheader>
      <div>
      <Swiper spaceBetween={0} slidesPerView={1} pagination>
        {
          users.imgs.map(item => <SwiperSlide><img src={item} alt="userImg" /></SwiperSlide>)
        }
      </Swiper>
      </div>
    </div>
  );
}

export default MainItem;