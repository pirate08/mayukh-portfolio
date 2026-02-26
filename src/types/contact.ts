import { IconType } from "react-icons";

export interface ContactInfo {
  id: number;
  icon: IconType;
  title: string;
  address: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactForm {
  title: string;
  type?: "text" | "email";
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}
