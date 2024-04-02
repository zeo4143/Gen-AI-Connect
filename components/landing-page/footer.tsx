// Completed - Brandkit Details 
// Additionalcoming soon

import { MdFacebook } from "react-icons/md";
import LineBreak from "../global/line-break";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import ContactForm from "./contact-form";

import logo from "@/public/logo.png";
import Image from "next/image";

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

      {/* <div className="flex items-center justify-center">
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
      </div> */}

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
          <ContactForm>
            <p className=" cursor-pointer hover:text-[rgb(185,168,223)]">
              Contact Us
            </p>
          </ContactForm>
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
