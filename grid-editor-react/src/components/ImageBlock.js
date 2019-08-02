import React from "react";
import { Rnd } from "react-rnd";
import CKEditor from "@ckeditor/ckeditor5-react";
import InlineEditor from "@ckeditor/ckeditor5-build-inline";

function ImageBlock(props) {
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: "url(" + props.src + ")",
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  return (
    <Rnd
      className="animated fadeIn"
      style={style}
      dragGrid={[20, 20]}
      resizeGrid={[20, 20]}
      default={{
        x: 500,
        y: 200,
        width: 200,
        height: 200
      }}
    />
  );
}

export default ImageBlock;
