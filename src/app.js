import React from "react";
import { push as Menu } from 'react-burger-menu';
import sidebarConfig from "./sidebarConfig.js";
import Board from "./board.js";
import './sidebarStyles.css';

const ArrowButton = (props) => (
  <div className="button_wrapper">
    <i onClick= {props.onClick} className="slidebar_button fas fa-chevron-right"></i>
    <i onClick= {props.onClick} className="slidebar_button fas fa-chevron-right"></i>
    <i onClick= {props.onClick} className="slidebar_button fas fa-chevron-right"></i>
  </div>
  );

const SidebarContent = (props) => {
  return (
    <div className="sidebarContent">
      <header>
        <img className="logo" src={props.logo} alt="Git Logo" />
        <p>{props.title}</p>
      </header>
      <article>{props.mainContent}</article>
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
  }

  handleStateChange = () => {
    this.setState({sidebarOpen: this.state.sidebarOpen});
  }

  openSideBar = () => {
    if(this.state.sidebarOpen === false) {
      this.setState({ sidebarOpen: true });
    }
  };

  closeSidebar = () => {
    if(this.state.sidebarOpen === true) {
      this.setState({ sidebarOpen: false });
    }
  }

  render() {
    const { title, logoUrl, mainContent } = sidebarConfig.sidebar;
    const sidebarContent = (
      <SidebarContent title={title} logo={logoUrl} mainContent={mainContent} />
    );

    return (
      <div onClick={this.closeSidebar} id="outer-container">
        <Menu customBurgerIcon={false} isOpen={this.state.sidebarOpen} onStateChange={this.handleStateChange} pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
          <a>{sidebarContent}</a>
        </Menu>
        <div className="header">
        {!this.state.sidebarOpen? <ArrowButton onClick={this.openSideBar} />: null}
        </div>
        <div id="page-wrap"><Board /></div>
      </div>
    );
  }
}

export default App;