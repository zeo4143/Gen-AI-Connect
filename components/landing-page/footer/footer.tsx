// Completed - Brandkit Details
// Additionalcoming soon

import { MdFacebook } from "react-icons/md";
import LineBreak from "../../global/line-break";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import ContactForm from "../contact-form";

import logo from "@/public/logo.png";
import Image from "next/image";
import { footer } from "@/lib/data";
import Link from "next/link";
import { Button } from "../../ui/button";
import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";

const Footer = () => {
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

      {/* <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <h3 className=" mr-4 font-medium">Follow Us: </h3>
          <span className=" hover:text-[rgb(185,168,223)] cursor-pointer flex items-center text-xl font-medium">
            <MdFacebook className="mr-2 " />
            <span className="hidden md:block">Facebook</span>
          </span>
          <span className=" hover:text-[rgb(185,168,223)] cursor-pointer flex items-center text-xl font-medium">
            <FaInstagram className="mr-2" />
            <span className="hidden md:block">Instagram</span>
          </span>
          <span className=" hover:text-[rgb(185,168,223)] cursor-pointer flex items-center text-xl font-medium">
            <FaLinkedin className="mr-2" />
            <span className="hidden md:block">LinkedIn</span>
          </span>
          <span className=" hover:text-[rgb(185,168,223)] cursor-pointer flex items-center text-xl font-medium">
            <FaXTwitter className="mr-2" />
            <span className="hidden md:block">Twitter</span>
          </span>
        </div>
        <div className="flex gap-4">
            <MoonIcon  values=""/>
            <SunIcon/>
            <DesktopIcon/>
        </div>
      </div> */}

      <div className="my-4">
        <LineBreak />
      </div>

      <div className="md:flex  md:items-center md:justify-between">

        <div className="mt-10 md:mt-0 ">
          <div className="flex items-center">
            <Image src={logo} width={60} height={60} alt="Logo" />
            <div>
              <p>&copy; 2024</p>
              <p>All rights reserved.</p>
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
    </footer>
  );
};

export default Footer;
