import React, { Component } from 'react';
import Home from './component/Home/Home';
import Generic from './component/generic/Generic';
import Toggle from './component/toggle/Toggle';
import MenuBox from './component/menuBox/MenuBox';
import Overlay from './component/overlay/Overlay';

class App extends Component {
  state = {
    showMenu: false
  };

  toggleBtn = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });

    console.log(this.state.showMenu);
  };
  overlayClicked = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  };
  render() {
    let overlay;
 
    if (this.state.showMenu) {
      overlay = <Overlay overlayClicked={this.overlayClicked} />;
      
    }

    return (
      <div>
        <Toggle toggleBtn={this.toggleBtn} />
        {/* <MenuBox show={this.state.showMenu} /> */}
        {overlay}
        <MenuBox show={this.state.showMenu}/>
        <Home />
        <Generic />
      </div>
    );
  }
}

export default App;
