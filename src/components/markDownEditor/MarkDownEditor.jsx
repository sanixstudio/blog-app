import React from "react";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import MDEditor from "@uiw/react-md-editor";
import("@uiw/react-md-editor");
import rehypeSanitize from "rehype-sanitize";

function MarkDownEditor({ value, setValue }) {
  return (
    <div>
      <MDEditor
        value={value}
        onChange={setValue}
        slot="MarkDownEditor.jsx"
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
      />
    </div>
  );
}

export default MarkDownEditor;
