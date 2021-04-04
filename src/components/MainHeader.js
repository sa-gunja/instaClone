import styled from "styled-components";
import headerLogo from "assets/images/header_logo.png";
import headerAdd from "assets/images/header_add.png";
import headerLike from "assets/images/header_like.png";
import headerDm from "assets/images/header_dm.png";

function Header() {
  const HeaderStyle = styled.div`
    width: 100%;
    height: 55px;
    padding: 12.5px 20px;
    position: fixed;
    top: 0;
    left: 0%;
    border-bottom: 1px solid #262626;

    &::after {
      content: "";
      display: block;
      clear: both;
    }

    .logo {
      width: 115px;
    }

    .header_btn {
      float: right;
      padding-top: 5px;

      img {
        width: 22.5px;
        padding-left: 25px;
      }
    }
  `;
  return (
    <HeaderStyle>
      <img className="logo" src={headerLogo} alt="header_logo"/>
      <div className="header_btn">
        <img src={headerAdd} alt="header_add" />
        <img src={headerLike} alt="header_like" />
        <img src={headerDm} alt="header_dm" />
      </div>
    </HeaderStyle>
  );
}

export default Header;
