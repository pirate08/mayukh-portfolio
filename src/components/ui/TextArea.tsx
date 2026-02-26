import React from "react";
import { ContactForm } from "@/types/contact";

interface InputProps {
  props: ContactForm;
}

const TextArea = ({ props }: InputProps) => {
  return (
    <div>
      <textarea
        placeholder={props.title}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        required
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary h-32 cursor-pointer w-full resize-none"
      ></textarea>
    </div>
  );
};

export default TextArea;
