import { MdFacebook } from "react-icons/md";
import LineBreak from "../line-break";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import Contact from "./contact";
import { Button } from "../ui/button";

import logo from "@/public/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer id="contact" className="p-7">
      <div className="md:mx-[5%] md:my-[20vh] flex items-center justify-center md:justify-between">
        <div className="my-12 flex flex-col ">
          <Image src={logo} alt="GenAIConnect Logo" width={200} height={200} />
          <h1 className="text-3xl font-extrabold">GenAI Connect</h1>
          <div className="">
            <p>info@genaiconnect.com</p>
            <p>+1234567890</p>
            <p>123 Street, City, Country</p>
          </div>
        </div>
        <div className="hidden relative md:block">
          <small className="ml-5 px-1.5 absolute -top-2.5 bg-background rounded-[20px] text-[rgb(185,168,223)]">
            Contact
          </small>
          <Contact>
            <Button
              variant="outline"
              className="px-6 py-8 w-[300px] lg:w-[400px] rounded-[50px] border-[rgb(185,168,223)]"
            ></Button>
          </Contact>
          <FaSearch className="w-8 h-8 absolute top-1/2 right-6 -translate-y-1/2 text-[rgb(185,168,223)]" />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <h3 className="hidden mr-4 font-medium">Follow Us: </h3>
        <div className="flex gap-4">
          <span className=" hover:text-[rgb(185,168,223)] cursor-pointer flex items-center text-xl font-medium">
            <MdFacebook className="mr-2 w-8 h-8" />
            <span className="hidden md:block">Facebook</span>
          </span>
          <span className=" hover:text-[rgb(185,168,223)] cursor-pointer flex items-center text-xl font-medium">
            <FaInstagram className="mr-2 w-8 h-8" />
            <span className="hidden md:block">Instagram</span>
          </span>
          <span className=" hover:text-[rgb(185,168,223)] cursor-pointer flex items-center text-xl font-medium">
            <FaLinkedin className="mr-2 w-8 h-8" />
            <span className="hidden md:block">LinkedIn</span>
          </span>
          <span className=" hover:text-[rgb(185,168,223)] cursor-pointer flex items-center text-xl font-medium">
            <FaXTwitter className="mr-2 w-8 h-8" />
            <span className="hidden md:block">Twitter</span>
          </span>
        </div>
      </div>

      <div className="my-4">
        <LineBreak />
      </div>

      <div className=" lg:flex  lg:flex-row-reverse lg:items-baseline lg:justify-between">
        <div className=" my-2 md:flex gap-5">
          <p className=" cursor-pointer hover:text-[rgb(185,168,223)]">
            Privacy Policy
          </p>
          <p className=" cursor-pointer hover:text-[rgb(185,168,223)]">
            Terms of Services
          </p>
          <p className=" cursor-pointer hover:text-[rgb(185,168,223)]">
            Data Privacy
          </p>
          <Contact>
            <p className=" cursor-pointer hover:text-[rgb(185,168,223)]">
              Contact Us
            </p>
          </Contact>
        </div>

        <div className="flex flex-wrap">
          <p>&copy; 2024 Gen-AIConnect.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
