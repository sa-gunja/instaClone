import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import MainItem from "components/MainItem.js";
import Menu from "components/Menu.js";
import MainHeader from "components/MainHeader.js";


import "swiper/swiper.scss";

const Story = styled.div`
  width:100%;
  padding:12.5px 15px;
`;

const StoryItem = styled.div`
  width: 100%;
  text-align: center;

  .story_img {
    height: ${(props) => props.height};
    border: 1px solid red;
    border-radius: 50%;
  }

  .story_name {
    font-size: 0.75rem;
    margin-top: 7.5px;
  }
`;

const storyList = [
  {
    idx: 1,
    name: "김모치1",
    img: "dfdfdf"
  },
  {
    idx: 2,
    name: "김모치2",
    img: "dfdfdf"
  },
  {
    idx: 3,
    name: "김모치3",
    img: "dfdfdf"
  },
  {
    idx: 4,
    name: "김모치4",
    img: "dfdfdf"
  },
  {
    idx: 5,
    name: "김모치5",
    img: "dfdfdf"
  },
  {
    idx: 6,
    name: "김모치6",
    img: "dfdfdf"
  }
];

const users = [
  {
    idx: 1,
    profile: "http://placeimg.com/640/480/any",
    name: "aircraft",
    follwState: false,
    imgs: [
      "http://placeimg.com/640/480/any",
      "http://placeimg.com/640/480/tech"
    ]
  },
  {
    idx: 2,
    profile: "http://placeimg.com/640/480/tech",
    name: "coco_coco909",
    follwState: true,
    imgs: [
      "http://placeimg.com/640/480/animal",
      "http://placeimg.com/640/480/nature"
    ]
  },
  {
    idx: 3,
    profile: "http://placeimg.com/640/480/nature",
    name: "easydeep.ai",
    follwState: false,
    imgs: [
      "http://placeimg.com/640/480/any",
      "http://placeimg.com/640/480/tech"
    ]
  }
]

function Home() {
  const [userStory, setuserStory] = useState([]);
  const [height, setHeight] = useState("");

  const handleResize = () => {
    setHeight(window.innerWidth / 4.9 - 20);
  };

  useEffect(() => {
    setuserStory(storyList);
    setHeight(window.innerWidth / 4.9 - 20);
    window.addEventListener("resize", handleResize);
    return () => {
      // cleanup
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
    <MainHeader />
      <Story>
        <Swiper spaceBetween={15} slidesPerView={4.8}>
          {userStory.map((item) => {
            return (
              <SwiperSlide key={item.idx}>
                <StoryItem height={`${height}px`}>
                  <div className="story_img"></div>
                  <div className="story_name">{item.name}</div>
                </StoryItem>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Story>
      <div>
        {
          users.map(item => <MainItem users={item} />)
        }
      </div>
      <Menu />
    </div>
  );
}

export default Home;
