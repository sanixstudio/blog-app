import React from "react";

const ParsedHtml = ({ htmlContent }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(htmlContent) }}
    />
  );
};

export default ParsedHtml;
