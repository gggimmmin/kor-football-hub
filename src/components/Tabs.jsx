import { MemberContext } from "context/MemberContext";
import { useContext } from "react";
import { Tab, TabsContainer } from "styles/TabsStyle";

export default function Tabs() {
  const { activePlayer, setActivePlayer } = useContext(MemberContext);
  const onActivePlayer = (event) => {
    if (event.target === event.currentTarget) return;

    setActivePlayer(event.target.textContent);
  };
  return (
    <TabsContainer onClick={onActivePlayer}>
      <Tab $activePlayer={activePlayer}>손흥민</Tab>
      <Tab $activePlayer={activePlayer}>이강인</Tab>
      <Tab $activePlayer={activePlayer}>김민재</Tab>
      <Tab $activePlayer={activePlayer}>황희찬</Tab>
    </TabsContainer>
  );
}
