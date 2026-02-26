"use client";

import React, { useState } from "react";
import { ContactInfo, ContactFormData } from "@/types/contact";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import Input from "../ui/Input";
import TextArea from "../ui/TextArea";
import { BsFillSendFill } from "react-icons/bs";

const contactInfo: ContactInfo[] = [
  {
    id: 1,
    icon: MdOutlineMail,
    title: "Email",
    address: "devdosedaily@gmail.com",
  },
  {
    id: 2,
    icon: FaLocationDot,
    title: "Location",
    address: "Coochbehar, India",
  },
];

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);

  //   --Function to handle the input change--
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  //   --Function to submit the form--
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <section
      id="contact"
      className="bg-secondary py-24 px-4"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h6 className="font-mono text-primary text-base mb-2">
            Get In Touch
          </h6>
          <h2
            id="skills-heading"
            className="text-3xl md:text-[36px] font-bold text-slate-900"
          >
            Let's Work Together
          </h2>
          <p className="font-sans text-gray-500 text-lg md:text-[20px] mt-5 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out.
            I'm always open to discussing new opportunities.
          </p>
        </div>

        {/* --Contact Information + Form for Contact-- */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* --Left Side: Contact Information goes here-- */}
          <div className="md:w-1/2 mt-5">
            {/* --Title-- */}
            <h1 className="text-[20px] md:text-2xl font-medium text-gray-800">
              Contact Information
            </h1>
            {/* --Contact Details-- */}
            <div className="mt-5">
              {contactInfo.map((info) => (
                <div
                  key={info.id}
                  className="bg-white px-4 py-5 rounded-md shadow-sm mb-4 border border-gray-50"
                >
                  <div className="flex items-center gap-4">
                    <div>
                      <info.icon className="text-primary text-5xl bg-primary/10 p-3 rounded-lg " />
                    </div>
                    <div>
                      <h1 className="text-gray-500 text-[14px]">
                        {info.title}
                      </h1>
                      <p className="text-[16px] font-semibold">
                        {info.address}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* --Connect with me section goes here-- */}
            <div className="mt-8">
              <h1 className="text-[16px] md:text-2xl font-medium text-gray-800">
                Connect with me
              </h1>
              {/* --Social media links-- */}
              <div className="flex items-center gap-4 mt-6">
                <Link
                  href="https://github.com/pirate08/"
                  className="bg-white rounded-lg p-3 hover:bg-primary hover:text-white text-3xl text-gray-500 transition-all duration-300"
                >
                  <FaGithub />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/mayukh-deb-goswami-343563358/"
                  className="bg-white rounded-lg p-3 hover:bg-primary hover:text-white text-3xl text-gray-500 transition-all duration-300"
                >
                  <FaLinkedin />
                </Link>
              </div>
            </div>
          </div>
          {/* --Contact Form goes here-- */}
          <div className="md:w-1/2">
            {/* --Form goes here--  */}
            <div className="bg-white px-6 py-10 rounded-lg shadow-sm border border-gray-50">
              <h1 className="text-[20px] font-normal">Send a Message</h1>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4 mt-5">
                  {/* --Name Field-- */}
                  <Input
                    props={{
                      title: "Your Name",
                      type: "text",
                      name: "name",
                      value: formData.name,
                      onChange: handleInputChange,
                    }}
                  />

                  {/* Email Field */}
                  <Input
                    props={{
                      title: "Your Email",
                      type: "email",
                      name: "email",
                      value: formData.email,
                      onChange: handleInputChange,
                    }}
                  />
                  {/* --Message Field-- */}
                  <TextArea
                    props={{
                      title: "Your Message",
                      name: "message",
                      value: formData.message,
                      onChange: handleInputChange,
                    }}
                  />

                  {/* --Button goes here-- */}
                  <button
                    className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 cursor-pointer transition-colors duration-300 flex items-center justify-center gap-2"
                    type="submit"
                  >
                    Send Message
                    <BsFillSendFill className="text-lg" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
