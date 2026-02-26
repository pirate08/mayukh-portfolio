import React from "react";
import { ContactForm } from "@/types/contact";

interface InputProps {
  props: ContactForm;
}

const Input = ({ props }: InputProps) => {
  return (
    <div className="w-full">
      <input
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        type={props.type}
        placeholder={props.title}
        required
        className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
};

export default Input;
