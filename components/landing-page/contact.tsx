// Done ✅✅

import React from 'react'
import ContactForm from './contact-form'
import { Button } from '../ui/button'
import { FaSearch } from 'react-icons/fa'
import { Label } from '../ui/label'

const Contact = () => {
  return (
    <section id='contact' className="py-[10vh] md:py-[25vh] lg:py-[50vh] relative w-[90%] sm:w-[80%] md:w-[60%] lg:w-1/2 mx-auto text-[rgb(185,168,223)] hover:text-white ">
    <Label className="ml-6 my-4 absolute md:text-4xl text-inherit">
      Contact
    </Label>
    <ContactForm>
      <Button
        variant="outline"
        className="px-6 py-8 w-full rounded-[50px] border-4 hover:bg-transparent hover:border-white  border-[rgb(185,168,223)]"
      ></Button>
    </ContactForm>
    <FaSearch className="w-8 h-8 absolute top-1/2 -translate-y-1/2 right-6" />
  </section>
  )
}

export default Contact

