import { useState } from "react";
import profile from "../assets/profile.webp";
import PropType from "prop-types";

const Header = ({ setMenuShow }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <nav className="flex flex-row py-2 shadow-md relative">
        <button
          className="basis-6 px-6 md:hidden"
          onClick={() => setMenuShow(true)}
        >
          <i className="fa-solid fa-bars text-xl text-slate-400 "></i>
        </button>
        <span className="bg-black w-px h-6 opacity-20 self-center"></span>
        <form action="#" className="flex-1 px-3 flex items-center">
          <i className="fa-solid fa-magnifying-glass text-lg px-1 text-slate-400"></i>
          <input
            type="text"
            name="search"
            placeholder="Search ..."
            className="search h-full w-[90%] mx-2 outline-none bg-none"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <i
            className={`fa-solid fa-xmark text-gray-700 cursor-pointer ${
              inputValue !== "" ? "block" : "hidden"
            }`}
            onClick={() => setInputValue("")}
          ></i>
        </form>
        <div className="flex items-center gap-3 w-fit mr-3 md:mr-12">
          <i className="fa-solid fa-bell text-xl mr-1 text-slate-400 justify-self-end"></i>
          <span className="bg-black w-px h-6 opacity-20 hidden md:block md:mx-3"></span>
          <img
            src={profile}
            alt="profile"
            className="rounded-full h-[30px] w-[30px] md:h-[40px] md:w-[40px] place-self-center opacity-80 transition-opacity duration-100 hover:opacity-100 peer/options"
          />
          <h1 className="hidden md:block">John Doe</h1>
          <button className="peer">
            <i className="fa fa-angle-down hidden md:block relative top-0.5 cursor-pointer peer"></i>
          </button>
          <ul className="name-option hidden md:flex md:flex-col bg-white w-fit shadow-lg rounded-md absolute border border-gray-100 top-12 right-9 z-20 transition-all duration-150 opacity-0 peer-focus:scale-100 peer-focus:opacity-100 peer-focus:translate-y-2">
            <a
              href="#"
              className="px-3 my-1 py-1 text-black hover:bg-slate-100"
            >
              <li>Your profile</li>
            </a>
            <a
              href="#"
              className="px-3 my-1 py-1 text-black hover:bg-slate-100"
            >
              <li>Sign out</li>
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
};

Header.propTypes = {
  setMenuShow: PropType.func.isRequired,
};

export default Header;