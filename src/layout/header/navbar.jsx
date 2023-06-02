import { useState } from "react";
import PropType from "prop-types";

import { Transition, Menu } from "@headlessui/react";

import profile from "../../assets/profile.webp";
import Theme from "./theme";

const Header = ({ setMenuShow }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <nav className="flex flex-row py-2 shadow-md relative dark:bg-slate-800 transition-colors duration-500">
        <button
          className="basis-6 px-6 md:hidden"
          onClick={() => setMenuShow(true)}
        >
          <i className="fa-solid fa-bars text-xl text-slate-400"></i>
        </button>
        <span className="bg-black w-px h-6 opacity-20 self-center md:hidden dark:bg-white"></span>
        <form action="#" className="flex-1 px-3 flex items-center">
          <i className="fa-solid fa-magnifying-glass text-lg px-1 text-slate-400"></i>
          <input
            type="text"
            name="search"
            placeholder="Search ..."
            className="search h-full w-[90%] mx-2 outline-none bg-none bg-transparent dark:text-gray-300"
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
        <Menu
          as="div"
          className="flex items-center gap-3 w-fit mr-3 md:mr-12 dark:text-gray-300"
        >
          <Theme />
          {/* dark or light mode */}

          <i className="fa-solid fa-bell text-xl mr-1 text-slate-400 justify-self-end"></i>
          <span className="bg-black w-px h-6 opacity-20 hidden md:block md:mx-3 dark:bg-white"></span>
          <img
            src={profile}
            alt="profile"
            className="rounded-full h-[30px] w-[30px] md:h-[40px] md:w-[40px] place-self-center opacity-80 transition-opacity duration-100 hover:opacity-100 peer/options ring-1 ring-black dark:ring-gray-400"
          />
          <h1 className="hidden md:block font-semibold">John Doe</h1>
          <Menu.Button>
            <i className="fa fa-angle-down hidden md:block relative top-0.5 cursor-pointer"></i>
          </Menu.Button>

          <Transition
            as="ul"
            className="name-option hidden md:flex md:flex-col bg-white w-fit shadow-lg rounded-md absolute border border-gray-100 top-12 right-9 z-20
            dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
            enter="transition-all duration-200"
            enterFrom="opacity-0 scale-95 pointer-event-none"
            enterTo="opacity-100 scale-100 pointer-event-auto"
            leave="transition-all duration-200"
            leaveFrom="opacity-100 scale-100 pointer-event-auto"
            leaveTo="opacity-0 scale-95 pointer-event-none"
          >
            <a
              href="#"
              className=" px-5 my-1 py-2 text-black hover:bg-slate-100 hover:text-blue-500  dark:text-gray-400 dark:hover:bg-gray-900"
            >
              <li>Your profile</li>
            </a>
            <a
              href="#"
              className="px-5 my-1 py-2 text-black hover:bg-slate-100  hover:text-blue-500  dark:text-gray-400 dark:hover:bg-gray-900"
            >
              <li>Sign out</li>
            </a>
          </Transition>
        </Menu>
      </nav>
    </>
  );
};

Header.propTypes = {
  setMenuShow: PropType.func.isRequired,
};

export default Header;
