import { useState } from "react";

import Header from "./layout/header";
import Menu from "./layout/menu";
import Main from "./layout/main";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="relative w-full md:flex md:flex-row-reverse">
      <div className="content md:flex-1">
        <Header setMenuShow={setShowMenu} />
        <Main />
      </div>
      <div className="sidebar md:flex-none">
        <Menu show={showMenu} setMenuShow={setShowMenu} />
      </div>
    </div>
  );
};

export default App;
