import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import FlatButton from 'material-ui/FlatButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';
import { Switch, Route, Link } from 'react-router-dom';
import LandingPage from './landing_page';
import CoursePage51a from './course_page_51a';
import CoursePage51b from './course_page_51b';
import Projects from './projects';
import Partners from './partners_page.js';
import Mentors from './mentors_page.js';
import About from './about_page.js';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import SideBarLinks from './cs51-sidebar-links';

function applyClickHandler() {
  alert('The application period for Winter 2018 has ended, and will reopen fall 2019.');
}

function cs52ClickHandler() {
  alert('Coming soon :)');
}

function goHome() {
	window.location.href = './';
}

const iconStyles = {
  marginRight: 24,
};

const logo_path = "M23.1858609,15.4004907 L10.750075,23.9495294 L23.0440262,32.4010633 L23.0440262,47.7615674 L0.700011737,30.889002 L0.700000763,17.0405592 L0.900012258,17.1780581 L0.9000125,16.8725654 L23.1344318,0.0827582913 L23.1344318,0 L23.1884291,0.0419834224 L23.244027,0 L23.244027,0.0852112193 L64.8300018,32.4186628 L64.8300018,32.4010633 L77.2239534,23.8807837 L64.8300018,15.3605041 L64.8300018,0 L87.1740163,16.8725654 L87.1740219,23.8807837 L87.1740163,30.889002 L64.8496738,47.7467126 L64.8496738,47.794462 L23.1858609,15.4004907 Z"

export default class App extends Component {

	constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

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
		        <ToolbarGroup lastChild={true} className="nav-button-group hidden-xs hidden-sm">
							<FlatButton label="Partners" className="nav-button" containerElement={<Link to={'/partners'}></Link>}/>
							<FlatButton label="Mentors" className="nav-button" containerElement={<Link to={'/mentors'}></Link>}/>
      				<FlatButton label="Projects" className="nav-button" containerElement={<Link to={'/projects'}></Link>}/>
      				<FlatButton label="CS51" className="nav-button" containerElement={<Link to={'/'}></Link>}/>
      				<FlatButton label="CS52" className="nav-button" onClick={cs52ClickHandler} />
		        	<ToolbarSeparator />
		          <RaisedButton label="Apply" onClick={applyClickHandler} primary={true} />
		        </ToolbarGroup>
		        <ToolbarGroup lastChild={true} className="nav-button-group hidden-md hidden-lg">
		        	<MenuIcon style={iconStyles}  onClick={this.handleToggle} color="#FFF" />
		        	<Drawer docked={false} width={200} open={this.state.open} onRequestChange={(open) => this.setState({open})} >
			          <MenuItem onClick={this.handleClose} containerElement={<Link to={'/partners'}></Link>}>Partners</MenuItem>
			          <Divider/>
			          <MenuItem onClick={this.handleClose} containerElement={<Link to={'/mentors'}></Link>}>Mentors</MenuItem>
			          <Divider/>
			          <MenuItem onClick={this.handleClose} containerElement={<Link to={'/projects'}></Link>}>Projects</MenuItem>
			          <Divider/>
			        </Drawer>
		        </ToolbarGroup>
      		</Toolbar>
	      	<Switch>
		        <Route exact path="/" component={CoursePage51a} />
		        <Route path="/projects" component={Projects} />
						<Route path="/partners" component={Partners} />
						<Route path="/mentors" component={Mentors} />
		      </Switch>

      	</div>
      </MuiThemeProvider>
    );
  }
}
