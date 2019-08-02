import React from "react";
import { Rnd } from "react-rnd";
import CKEditor from "@ckeditor/ckeditor5-react";
import InlineEditor from "@ckeditor/ckeditor5-build-inline";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#fff"
};

function TextBlock(props) {
  return (
    <Rnd
      className="animated fadeIn"
      enableUserSelectHack={false}
      style={style}
      dragGrid={[20, 20]}
      resizeGrid={[20, 20]}
      default={{
        x: 500,
        y: 200,
        width: 200,
        height: 200
      }}
    >
      <CKEditor
        editor={InlineEditor}
        data="<p>Lorem Ipsum</p>"
        onInit={editor => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={editor => {
          console.log("Blur.", editor);
        }}
        onFocus={editor => {
          console.log("Focus.", editor);
        }}
      />
    </Rnd>
  );
}

export default TextBlock;
