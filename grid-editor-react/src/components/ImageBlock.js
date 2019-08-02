import React from "react";
import { Rnd } from "react-rnd";
import CKEditor from "@ckeditor/ckeditor5-react";
import InlineEditor from "@ckeditor/ckeditor5-build-inline";

class ImageBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width:200,
    };
  }
  render(){
    const style = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: "url(" + this.props.src + ")",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: this.state.width
    };

    return (
      <Rnd
        bounds={"window"}

        onResize={(e, direction, ref, delta, position) => {
          let width = ref.offsetWidth;
          let container = window.innerWidth;
          let percentage  = Math.round((width / container) * 10000)/100;
          console.log("PERCENT: " + percentage);
          this.setState({
            width: percentage + "%"
          });

        }}
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
}

export default ImageBlock;
