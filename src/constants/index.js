import img from "../assets/images/no_photo.jpg";

export const BASE_ROUTE = import.meta.env.VITE_BASE_URL;
export const LOGIN_PATH = `${BASE_ROUTE}/api/login`;
export const REGISTER_PATH = `${BASE_ROUTE}/api/register`;

export const FORMATS = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
];

export const MODULES = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

export const NO_IMAGE = img;
