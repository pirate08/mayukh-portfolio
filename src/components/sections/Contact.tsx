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

type FormStatus = "idle" | "loading" | "success" | "error";

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  // ✅ Validation function
  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // --Handle Input change function--
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // ✅ Clear error for the field being typed in
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // --Handle Submit function--
  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;
    setStatus("loading");
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setStatusMessage("Message sent! I'll get back to you soon. 🎉");
        setFormData(initialFormData);
        setErrors({});
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Failed to send. Please try again.");
    }
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
            id="contact-heading"
            className="text-3xl md:text-[36px] font-bold text-slate-900"
          >
            Let's Work Together
          </h2>
          <p className="font-sans text-gray-500 text-lg md:text-[20px] mt-5 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out.
            I'm always open to discussing new opportunities.
          </p>
        </div>

        {/* Contact Information + Form */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Side */}
          <div className="md:w-1/2 mt-5">
            <h2 className="text-[20px] md:text-2xl font-medium text-gray-800">
              Contact Information
            </h2>

            {/* Contact Details */}
            <div className="mt-5">
              {contactInfo.map((info) => (
                <div
                  key={info.id}
                  className="bg-white px-4 py-5 rounded-md shadow-sm mb-4 border border-gray-50"
                >
                  <div className="flex items-center gap-4">
                    <info.icon className="text-primary text-5xl bg-primary/10 p-3 rounded-lg shrink-0" />
                    <div>
                      <p className="text-gray-500 text-[14px]">{info.title}</p>
                      <p className="text-[16px] font-semibold">
                        {info.address}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h2 className="text-[16px] md:text-2xl font-medium text-gray-800">
                Connect with me
              </h2>
              <div className="flex items-center gap-4 mt-6">
                <Link
                  href="https://github.com/pirate08/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="bg-white rounded-lg p-3 hover:bg-primary hover:text-white text-3xl text-gray-500 transition-all duration-300"
                >
                  <FaGithub />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/mayukh-deb-goswami-343563358/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="bg-white rounded-lg p-3 hover:bg-primary hover:text-white text-3xl text-gray-500 transition-all duration-300"
                >
                  <FaLinkedin />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="md:w-1/2">
            <div className="bg-white px-6 py-10 rounded-lg shadow-sm border border-gray-50">
              <h2 className="text-[20px] font-normal">Send a Message</h2>
              <form onSubmit={handleSubmit} noValidate>
                <div className="flex flex-col gap-4 mt-5">
                  <Input
                    props={{
                      title: "Your Name",
                      type: "text",
                      name: "name",
                      value: formData.name,
                      onChange: handleInputChange,
                      error: errors.name,
                    }}
                  />

                  <Input
                    props={{
                      title: "Your Email",
                      type: "email",
                      name: "email",
                      value: formData.email,
                      onChange: handleInputChange,
                      error: errors.email,
                    }}
                  />

                  <TextArea
                    props={{
                      title: "Your Message",
                      name: "message",
                      value: formData.message,
                      onChange: handleInputChange,
                      error: errors.message,
                    }}
                  />

                  {/* Status Message */}
                  {status === "success" && (
                    <p className="text-primary text-sm font-medium text-center bg-primary/5 border border-primary/20 px-4 py-2 rounded-lg">
                      ✅ {statusMessage}
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-red-500 text-sm font-medium text-center bg-red-50 border border-red-200 px-4 py-2 rounded-lg">
                      ❌ {statusMessage}
                    </p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 cursor-pointer transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <span>Sending...</span>
                        <svg
                          className="animate-spin h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                          />
                        </svg>
                      </>
                    ) : (
                      <>
                        Send Message
                        <BsFillSendFill className="text-lg" />
                      </>
                    )}
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
