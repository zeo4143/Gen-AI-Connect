// Completed - Brandkit Details
// Additionalcoming soon

import { MdFacebook } from "react-icons/md";
import LineBreak from "../../global/line-break";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

import logo from "@/public/logo.png";
import Image from "next/image";
import { footer } from "@/lib/data";
import Link from "next/link";
import { Button } from "../../ui/button";
import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { createElement, useEffect, useState } from "react";

const Footer = () => {
  const { setTheme} = useTheme()
  const [theme, setLocalTheme] = useState<string|null>("");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    setLocalTheme(localTheme);
  }, []);

  

  console.log(theme);
  

  const handleChangeTheme = (e:any) => {
    setTheme(e.target.value)
  }

  const themeIcons =[
    {
      title : "dark",
      icon: createElement(MoonIcon)
    },

    {
      title : "light",
      icon: createElement(SunIcon)
    },

    {
      title : "system",
      icon: createElement(DesktopIcon)
    }
  ]

  

  return (
    <footer className="p-7">
      <div className="md:mx-[5%]  flex items-center justify-center md:justify-between">
        <div className="my-12 flex flex-col ">
          <Image src={logo} alt="GenAIConnect Logo" width={200} height={200} />
          <h1 className="text-3xl font-extrabold">GenAI Connect</h1>
          <div className="">
            <p>support@promohive.io</p>
            {/* <p>+1234567890</p>
            <p>123 Street, City, Country</p> */}
          </div>
        </div>
        {/* Add additional footer content for furture purpose */}
      </div>

      {/* Social media handles */}

      <div className="my-4">
        <LineBreak />
      </div>

      <div className="md:flex  md:items-center md:justify-between">

        <div className="mt-10 md:mt-0 ">
          <div className="flex items-center">
            <Image src={logo} width={50} height={50} alt="Logo" />
            <div>
              <p>&copy; 2024</p>
            </div>
          </div>
        </div>

        <div className=" my-2 flex gap-5">
          {footer.map(({ title, link }, index) => (
            <Link
              key={index}
              href={link}
              className="cursor-pointer hover:text-[rgb(185,168,223)]"
            >
              <p className="mb-2 md:mb-0"> {title}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between flex-wrap">
        <div className="flex gap-4">
          {/* <span className=" hover:text-[rgb(185,168,223)] cursor-pointer flex items-center text-xl font-medium">
            <MdFacebook className="mr-2 " />
          </span>
          <span className=" hover:text-[rgb(185,168,223)] cursor-pointer flex items-center text-xl font-medium">
            <FaInstagram className="mr-2" />
          </span>
          <span className=" hover:text-[rgb(185,168,223)] cursor-pointer flex items-center text-xl font-medium">
            <FaLinkedin className="mr-2" />
          </span>
          <span className=" hover:text-[rgb(185,168,223)] cursor-pointer flex items-center text-xl font-medium">
            <FaXTwitter className="mr-2" />
          </span> */}
        </div>
        <div className="flex ">
            {themeIcons.map(({ title, icon}, index) => (
              <Button key={index} size="icon" variant="outline" value={title} className={`rounded-[50%] border-0 ${theme == title ? 'bg-secondary opacity-100' : 'opacity-50'} hover:opacity-100`} onClick={handleChangeTheme}>
                {icon}
              </Button>
            ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
