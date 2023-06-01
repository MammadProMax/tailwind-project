import PropType from "prop-types";

const Menu = ({ show, setMenuShow }) => {
  window.onresize = () => {
    window.innerWidth <= 768 ? setMenuShow(false) : null;
  };

  const sideMenuStyles = () => {
    let _default =
      "side-menu min-h-screen -translate-x-full bg-dark-def text-light-md w-60 sm:w-80 absolute transition-transform duration-300 ease-out z-20 top-0 md:relative md:left-0 md:translate-x-0 ";
    return !show ? _default : _default + "translate-x-0";
  };

  const closeBtnStyles = () => {
    let _default = "close absolute -right-12 top-5 cursor-pointer md:hidden";
    return show ? _default : _default + " -translate-x-16";
  };

  const filterScreenStyles = () => {
    let _default =
      "filter-screen w-[100vw] h-[100vh] bg-gray-900 fixed top-0 transition-opacity duration-500 delay-[10ms] md:hidden ";
    return show ? _default + "opacity-80 z-10" : _default + "-z-10 opacity-0";
  };

  return (
    <>
      <div
        className={filterScreenStyles()}
        onClick={() => setMenuShow(false)}
      ></div>

      <div className={sideMenuStyles()}>
        <div className={closeBtnStyles()} onClick={() => setMenuShow(false)}>
          <span className=" w-0.5 h-5 bg-white inline-block mx-1 origin-bottom rotate-45 relative top-0 right-1"></span>
          <span className="w-0.5 h-5 bg-white inline-block mx-1 origin-bottom -rotate-45"></span>
        </div>
        <h1 className="p-5 left-2 top-2 text-lg font-semibold">logo</h1>
        <ul className="items flex flex-col top-12 pl-8 pr-4 gap-1">
          {[
            "Dashboard",
            "Team",
            "Projects",
            "Calender",
            "Document",
            "Reports",
          ].map((data, index) => (
            <a
              key={index}
              className="py-2 pr-1 pl-3 hover:text-white hover:bg-gray-800 rounded-lg font-bold "
              href="#"
            >
              <li>{data}</li>
            </a>
          ))}
        </ul>
        <div className="your-team">
          <h4 className="text-base p-5 font-sans font-thin">Your team</h4>
          <ul className="flex flex-col top-12 pl-8 pr-4 gap-1">
            {["HeroIcons", "Tailwind Labs", "workcation"].map((data, index) => (
              <a
                key={index}
                className="py-2 pr-1 pl-3 hover:text-white hover:bg-gray-800 rounded-lg font-semibold "
                href="#"
              >
                <li>{data}</li>
              </a>
            ))}
          </ul>
        </div>
        <a
          href="#"
          className="ml-5 pr-5 w-5/6 py-2 px-3 hover:text-white hover:bg-gray-800 rounded-lg font-bold absolute bottom-10"
        >
          Setting
        </a>
      </div>
    </>
  );
};

Menu.propTypes = {
  show: PropType.bool.isRequired,
  setMenuShow: PropType.func.isRequired,
};

export default Menu;
