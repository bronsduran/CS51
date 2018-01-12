import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import LandingPage from './components/landing_page';
import CoursePage51a from './components/course_page_51a';
import CoursePage51b from './components/course_page_51b';
import Projects from './components/projects';
import Partners from './components/partners_page.js';
import Mentors from './components/mentors_page.js';
import About from './components/about_page.js';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={CoursePage51a} />
		<Route path="CS51" component={CoursePage51a} />
		<Route path="CS52" component={CoursePage51b} />
		<Route path="projects" component={Projects} />
		<Route path="partners" component={Partners} />
		<Route path="mentors" component={Mentors} />
		<Route path="about" component={About} />
	</Route>
);