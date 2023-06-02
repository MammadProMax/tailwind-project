import { useState } from "react";

import Navbar from "./layout/header/navbar";
import Menu from "./layout/menu";
import Main from "./layout/main";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="relative w-full md:flex md:flex-row-reverse">
      <div className="min-h-screen content md:flex-1 dark:bg-gray-600 transition-colors duration-500">
        <Navbar setMenuShow={setShowMenu} />
        <Main />
      </div>
      <div className="sidebar md:flex-none">
        <Menu show={showMenu} setMenuShow={setShowMenu} />
      </div>
    </div>
  );
};

export default App;
