import styled from "styled-components";
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Pagination]);

const Userheader = styled.div`
  width:100%;
  height:50px;
  padding:0 15px;
  line-height:50px;
  font-size:0.9rem;

  &::after{
    content: "";
    display:block;
    clear:both;
  }

  .userName{
    float:left;
    margin-right:7.5px;
  }

  .userFollow{
    float:left;
    color:#377ccb;
    font-size:0.8rem;
  }

  .userMore{
    float:right;
  }
`;

const UserImg = styled.div`
  width:30px;
  height:30px;
  border-radius:50%;
  float:left;
  margin-right:10px;
  margin-top:8px;
  background: url(${props => props.profile}) center center / cover no-repeat;
`;

const SlideImg = styled.div`
  width:100%;
  height:350px;
  background:url(${props => props.src}) center center / cover no-repeat;
`;

function MainItem(props) {
  const users = props.users;
  return (
    <div>
      <Userheader>
        <UserImg profile={users.profile} />
        <div className="userName">{users.name}</div>
        <div className="userFollow">{users.follwState || "팔로우"}</div>
        <div className="userMore">...</div>
      </Userheader>
      <div>
      <Swiper spaceBetween={0} slidesPerView={1} pagination>
        {
          users.imgs.map(item => <SwiperSlide><SlideImg src={item} /></SwiperSlide>)
        }
      </Swiper>
      </div>
    </div>
  );
}

export default MainItem;