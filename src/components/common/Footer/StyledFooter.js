import styled from "styled-components";
import logoMonogramImage from "../../../images/logo-monogram.png";

export const Wrapper = styled.div`
  position: relative;
  background-color: #1c1c1c;
  color: #d9d9d9;
  width: 100%;
  height: 100vh;
  min-height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  z-index: 3;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const FooterLogo = styled.img.attrs(() => ({
  src: logoMonogramImage,
  alt: "logo"
}))`
  height: 50vh;
  @media (orientation: portrait) {
    height: auto;
    width: 50vw;
  }
`;

export const FooterNav = styled.div`
  min-width: 450px;
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (orientation: portrait) {
    min-width: 200px;
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const SocialMediaContainer = styled.div`
  margin-top: 2.5%;
  min-width: 10rem;
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 5rem;
  @media (orientation: portrait) {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const SocialMediaLink = styled.a.attrs(({ Type }) => {
  let href;
  let className;
  switch (Type) {
    case "Instagram":
      href = "https://www.instagram.com/devlaunchers/";
      className = "fab fa-instagram";
      break;
    case "Linkedin":
      href = "https://www.linkedin.com/company/devlaunchers/";
      className = "fab fa-linkedin";
      break;
    case "Twitch":
      href = "https://www.twitch.com/devlaunchers/";
      className = "fab fa-twitch";
      break;
    case "Discord":
      href = "https://www.discord.io/devlaunchers/";
      className = "fab fa-discord";
      break;
  }
  return { href, className };
})``;
export const NavEntry = styled.div`
  cursor: pointer;
  font-size: 1.75rem;
  @media (orientation: portrait) {
    font-size: 1.2rem;
  }
`;

export const OrgInfoArea = styled.div`
  width: 90%;
  text-align: right;
  font-size: 0.85rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
