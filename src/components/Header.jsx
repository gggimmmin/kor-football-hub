import { HeaderContainer, HeaderTitle } from "styles/HeaderStyle";
import Tabs from "./Tabs";

export default function Header({ activePlayer, setActivePlayer }) {
  return (
    <>
      <HeaderContainer>
        <HeaderTitle>대한민국 국가대표 축구팀 Fan Hub</HeaderTitle>
      </HeaderContainer>
      <Tabs activePlayer={activePlayer} setActivePlayer={setActivePlayer} />
    </>
  );
}
