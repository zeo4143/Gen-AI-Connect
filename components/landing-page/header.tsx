import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Navbar from "./navbar";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import logo from "@/public/logo.png";
import { Button } from "../ui/button";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isIconchanged, setIsIconChanged] = useState(false);

  const handleNav = () => {
    setIsNavOpen((prevState) => !prevState);
    setIsIconChanged((prevState) => !prevState);
  };

  return (
    <header className="p-4 flex items-center justify-around flex-wrap gap-4">
      <div className="w-full lg:w-fit flex items-center justify-between">
        <div className="flex items-center">
          <Image src={logo} alt="GenAIConnect Logo" width={50} height={50} />
          <h1 className="sm:text-xl md:text-2xl lg:text-4xl font-extrabold">
            GenAIConnect
          </h1>
        </div>
        {!isIconchanged ? (
          <HamburgerMenuIcon
            className="w-8 h-8 lg:hidden cursor-pointer"
            onClick={handleNav}
          />
        ) : (
          <MdClose
            className="w-8 h-8 lg:hidden cursor-pointer"
            onClick={handleNav}
          />
        )}
      </div>
      <Navbar isOpen={isNavOpen} handleNav={handleNav} />

      {/* <div className="p-2 flex gap-4">
        <Button className="px-8 rounded-[20px]">Log In</Button>
        <Button className="px-6 rounded-[20px]">Sign Up</Button>
      </div> */}
    </header>
  );
};

export default Header;
