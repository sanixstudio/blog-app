import React from "react";
import DOMPurify from "dompurify";

const ParsedHtml = ({ htmlContent }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(htmlContent) }}
    />
  );
};

export default ParsedHtml;
