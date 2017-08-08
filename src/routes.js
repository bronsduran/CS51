import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import LandingPage from './components/landing_page';
import CoursePage51a from './components/course_page_51a';
import CoursePage51b from './components/course_page_51b';
import Projects from './components/projects';


export default (
	<Route path="/" component={App}>
		<IndexRoute component={LandingPage} />
		<Route path="51a" component={CoursePage51a} />
		<Route path="51b" component={CoursePage51b} />
		<Route path="projects" component={Projects} />
	</Route>
);