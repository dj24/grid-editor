import { Menu, Item, Separator, Submenu, MenuProvider } from "react-contexify";
import "react-contexify/dist/ReactContexify.min.css";
import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Modal from "./components/Modal";
import TextBlock from "./components/TextBlock";
import ImageBlock from "./components/ImageBlock";

const axios = require("axios");

const MyAwesomeMenu = () => (
  <Menu id="menu_id">
    <Item>
      <ion-icon name="trash" />
      Delete
    </Item>
    <Item>
      <ion-icon name="copy" />Duplicate
    </Item>
  </Menu>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textblocks: [],
      imageblocks: [],
      selectedImg: "",
      wpimages: []
    };
    this.addTextBlock = this.addTextBlock.bind(this);
    this.addImageBlock = this.addImageBlock.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost/wp-json/markers/v1/image")
      .then(response => {
        this.setState({ wpimages: response.data });
      })
      .catch(error => {
        // handle error
        console.error(error);
      });
  }

  getSrc(e) {
    this.setState({ selectedImg: e.target.src });
  }

  addImageBlock() {
    this.setState({
      imageblocks: [...this.state.imageblocks, this.state.selectedImg]
    });
  }

  addTextBlock() {
    this.setState({ textblocks: [...this.state.textblocks, "new value"] });
  }

  render() {
    this.textBlocks = this.state.textblocks.map(function(item, i) {
      return <TextBlock key={i}>Test</TextBlock>;
    });

    this.imageBlocks = this.state.imageblocks.map(function(item, i) {
      return (
        <MenuProvider
          id="menu_id"
          style={{ border: "1px solid purple", display: "inline-block" }}
        >
          <ImageBlock src={item} key={i} />
        </MenuProvider>
      );
    });

    this.wpimages = this.state.wpimages.map((item, i) => {
      console.log(item);
      return (
        <img
          onClick={this.getSrc.bind(this)}
          class="col-3 mb-4"
          src={item.guid}
        />
      );
    });

    return (
      <div id="root" className="App">
        <Sidebar textFunc={this.addTextBlock} />
        {this.textBlocks}
        {this.imageBlocks}
        <Modal
          id="imageModal"
          title="Select Images"
          submit={this.addImageBlock}
        >
          <div class="row ">{this.wpimages}</div>
        </Modal>
        <MyAwesomeMenu />
      </div>
    );
  }
}

export default App;
