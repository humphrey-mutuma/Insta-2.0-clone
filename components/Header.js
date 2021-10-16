import Image from "next/image";

import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <header className="shadow-sm border-b bg-white sticky top-0 z-50">
      <nav className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        <div className="relative hidden lg:inline-grid cursor-pointer  w-24">
          <Image
            src="https://links.papareact.com/ocw"
            objectFit="contain"
            layout="fill"
          />
        </div>
        {/* small ig icon */}
        <div className="relative lg:hidden  w-10 cursor-pointer flex-shrink-0">
          <Image
            src="https://links.papareact.com/jjm"
            objectFit="contain"
            layout="fill"
          />
        </div>
        {/* input */}
        <div className="max-w-xs">
          <div className="mt-1 relative p-3 rounded-md bg">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400 " />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        {/* icon on the right hand side */}
        <div className="flex items-center justify-end space-x-4 ">
          <HomeIcon className=" navBtn" />
          <MenuIcon className="h-6  md:hidden cursor-pointer" />
          <span className="relative navBar">
            <PaperAirplaneIcon className=" navBtn rotate-45" />
            <span className="absolute -top-2 -right-3 text-xs w-5 h-5  bg-red-500 rounded-full flex items-center justify-center animate-pulse">
              4
            </span>
          </span>
          <PlusCircleIcon className=" navBtn" />
          <UserGroupIcon className=" navBtn" />
          <HeartIcon className=" navBtn" />
          <img
            src="https://links.papareact.com/3ke"
            className="h-10  rounded-full cursor-pointer  "
            alt="profile picture"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
