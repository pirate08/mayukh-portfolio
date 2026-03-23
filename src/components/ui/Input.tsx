import React from "react";
import { ContactForm } from "@/types/contact";

interface InputProps {
  props: ContactForm;
}

const Input = ({ props }: InputProps) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <input
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        type={props.type}
        placeholder={props.title}
        required
        className={`border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 transition-colors duration-200 ${
          props.error
            ? "border-red-400 focus:ring-red-300 bg-red-50"
            : "border-gray-300 focus:ring-primary"
        }`}
      />
      {/* Error message */}
      {props.error && (
        <p className="text-red-500 text-xs mt-0.5">{props.error}</p>
      )}
    </div>
  );
};

export default Input;
