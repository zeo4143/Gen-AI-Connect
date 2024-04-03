// UI - Done Partioally and positioning is not implemented

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import logo from "@/public/logo.png";
import { navItems } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isIconchanged, setIsIconChanged] = useState(false);

  const handleNav = () => {
    setIsNavOpen((prevState) => !prevState);
    setIsIconChanged((prevState) => !prevState);
  };

  const handleClose = () => {
    if (isNavOpen) {
      handleNav();
    }
  };

  return (
    <header className="w-full fixed z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="p-4  shadow-lg backdrop-blur-sm flex items-center justify-around flex-wrap gap-4"
      >
        <div className="w-full lg:w-fit flex items-center justify-between">
          <Link href={"/#home"}>
            <div className="flex items-center cursor-pointer">
              <Image
                src={logo}
                alt="GenAIConnect Logo"
                width={50}
                height={50}
              />
              <h1 className="text-xl sm:text-2xl font-semibold">
                GenAIConnect
              </h1>
            </div>
          </Link>
          {!isIconchanged ? (
            <HamburgerMenuIcon
              className="w-6 h-6 lg:hidden cursor-pointer"
              onClick={handleNav}
            />
          ) : (
            <MdClose
              className="w-6 h-6 lg:hidden cursor-pointer"
              onClick={handleNav}
            />
          )}
        </div>

        <nav className={`${isNavOpen ? "block w-full" : "hidden"} lg:block`}>
          <ul
            className={`flex ${
              isNavOpen ? "flex-col" : ""
            } items-center justify-center gap-1 text-center font-medium`}
          >
            {navItems.map((item, index) => (
              <li
                title={item.title}
                key={index}
                className="w-full hover:text-[rgb(185,168,223)] hover:scale-125 transition-all px-4 rounded-md"
                onClick={handleClose}
              >
                <a href={item.hash} className="block w-full">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* <div className="p-2 flex gap-4">
        <Button className="px-8 rounded-[20px]">Log In</Button>
        <Button className="px-6 rounded-[20px]">Sign Up</Button>
      </div> */}
      </motion.div>
    </header>
  );
};

export default Header;
