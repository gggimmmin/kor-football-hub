import { createContext, useState } from "react";

export const MemberContext = createContext(null);

function MemberContextProvider({ children }) {
  const [activePlayer, setActivePlayer] = useState("손흥민");
  return (
    <MemberContext.Provider value={{ activePlayer, setActivePlayer }}>
      {children}
    </MemberContext.Provider>
  );
}

export default MemberContextProvider;
