import React from "react";
import { ContactForm } from "@/types/contact";

interface InputProps {
  props: ContactForm;
}

const TextArea = ({ props }: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <textarea
        placeholder={props.title}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        required
        className={`border rounded-md px-4 py-2 focus:outline-none focus:ring-2 h-32 cursor-pointer w-full resize-none transition-colors duration-200 ${
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

export default TextArea;
