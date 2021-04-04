import styled from "styled-components";
import menuHome from "assets/images/menu_home.png";
import menuSearch from "assets/images/menu_search.png";
import menuVideo from "assets/images/menu_video.png";
import menuShop from "assets/images/menu_shop.png";
import menuProfile from "assets/images/menu_profile.png";

const MenuStyle = styled.div`
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #000;
  position: fixed;
  left: 0;
  bottom: 0;
  padding-top: 5px;
  border-top: 1px solid #262626;
  z-index:2;

  & > div {
    width: 20%;
    float: left;
    text-align: center;
  }

  img {
    width: 22.5px;
  }
`;
function Menu() {
  return (
    <MenuStyle>
      <div>
        <img src={menuHome} alt="menu_home" />
      </div>
      <div>
        <img src={menuSearch} alt="menu_search" />
      </div>
      <div>
        <img src={menuVideo} alt="menu_video" />
      </div>
      <div>
        <img src={menuShop} alt="menu_shop" />
      </div>
      <div>
        <img
          src={menuProfile} alt="menu_profile"/>
      </div>
    </MenuStyle>
  );
}

export default Menu;
