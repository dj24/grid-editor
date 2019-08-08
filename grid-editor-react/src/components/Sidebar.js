import React from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";
import Modal from "./Modal";

function Sidebar(props) {
  return (
    <div className="SidebarContainer animated fadeInRight">
      <div className="Sidebar">
        <button onClick={props.saveFunc} data-tip="Save Page">
          <ion-icon name="save" />
        </button>
        <button
          data-toggle="modal"
          data-target="#imageModal"
          data-tip="Add Image"
        >
          <ion-icon name="images" />
        </button>
        <button onClick={props.textFunc} data-tip="Add Text">
          <ion-icon name="text" />
        </button>
        <button data-tip="Dekstop View">
          <ion-icon name="desktop" />
        </button>
        <button data-tip="Mobile View">
          <ion-icon name="phone-portrait" />
        </button>
        <ReactTooltip effect="solid" />
      </div>
    </div>
  );
}

export default Sidebar;
