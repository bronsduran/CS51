import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LandingPage from './landing_page';
import Projects from './projects';
import CoursePage51a from './course_page_51a';
import CoursePage51b from './course_page_51b';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';

function applyClickHandler() {
  alert('The application period for Winter 2018 has ended, and will reopen fall 2019.');
}

function goHome() {
	window.location.href = './';
}

const logo_path = "M23.1858609,15.4004907 L10.750075,23.9495294 L23.0440262,32.4010633 L23.0440262,47.7615674 L0.700011737,30.889002 L0.700000763,17.0405592 L0.900012258,17.1780581 L0.9000125,16.8725654 L23.1344318,0.0827582913 L23.1344318,0 L23.1884291,0.0419834224 L23.244027,0 L23.244027,0.0852112193 L64.8300018,32.4186628 L64.8300018,32.4010633 L77.2239534,23.8807837 L64.8300018,15.3605041 L64.8300018,0 L87.1740163,16.8725654 L87.1740219,23.8807837 L87.1740163,30.889002 L64.8496738,47.7467126 L64.8496738,47.794462 L23.1858609,15.4004907 Z"

export default class App extends Component {

  render() {

    return (
    	<MuiThemeProvider>
    		<div>
				  <Toolbar className="navigation-bar">
		        <ToolbarGroup firstChild={true} className="navigation-brand-container" onClick={goHome}>
		        	<SvgIcon className="logo" color="#FFF" hoverColor={greenA200} viewBox="0 0 87 48" >
    						<path d={logo_path} />
  						</SvgIcon>
		          <ToolbarTitle className="navigation-title" text="CS + SG Studio" />
		        </ToolbarGroup>
		        <ToolbarGroup lastChild={true} className="nav-button-group">
							<FlatButton label="Partners" className="nav-button" containerElement={<a href="/partners">Partners</a>}/>
							<FlatButton label="Mentors" className="nav-button" containerElement={<a href="/mentors">Mentors</a>}/>
      				<FlatButton label="Projects" className="nav-button" containerElement={<a href="/projects">Projects</a>}/>
      				<FlatButton label="CS51" className="nav-button" containerElement={<a href="/CS51">CS51</a>}/>
      				<FlatButton label="CS52" className="nav-button" />
      				<FlatButton label="About" className="nav-button" containerElement={<a href="/about">About</a>}/>
		        	<ToolbarSeparator />
		          <RaisedButton label="Apply" onClick={applyClickHandler} primary={true} />
		        </ToolbarGroup>
      		</Toolbar>
	      	{this.props.children}
      	</div>
      </MuiThemeProvider>
    );
  }
}
