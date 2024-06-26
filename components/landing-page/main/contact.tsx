// Done ✅✅

import React from "react";
import ContactForm from "../contact-form";
import { Button } from "../../ui/button";
import { FaSearch } from "react-icons/fa";
import { Label } from "../../ui/label";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-[10vh] h-[100dvh] md:py-[25vh] lg:py-[50vh] w-[90%] sm:w-[80%] md:w-[60%] lg:w-1/2 mx-auto flex items-center "
    >
      <ContactForm>
        <div className="relative text-[rgb(185,168,223)] hover:text-white ">
          <Label className="ml-6 my-5 md:my-4 absolute text-2xl md:text-4xl text-inherit">
            Contact
          </Label>
          <Button
            variant="outline"
            className="px-6 py-8 w-full rounded-[50px] border-4 hover:bg-transparent hover:border-white  border-[rgb(185,168,223)]"
          ></Button>
          <FaSearch className="w-8 h-8 absolute top-1/2 -translate-y-1/2 right-6" />
        </div>
      </ContactForm>
    </section>
  );
};

export default Contact;
