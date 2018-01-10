const Airtable = require('airtable');
const base = new Airtable({apiKey: 'keyJoo0QH6ip5yH4S'}).base('app2yrNbBNc7l94XW');

export function fetchAdministrivia() {
	let administrivia = [];
	let thisContext = this;
	base('CS51 Administrivia').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 10,
    view: "Grid view"
	}).eachPage(function page(records, fetchNextPage) {
	    // This function (`page`) will get called for each page of records.

	    records.forEach(function(handout) {
	        console.log('Retrieved', handout.get('Name'));
	        administrivia.push(handout);
	        thisContext.setState({ administrivia });
	    });
	    // To fetch the next page of records, call `fetchNextPage`.
	    // If there are more records, `page` will get called again.
	    // If there are no more records, `done` will get called.
	    fetchNextPage();

	}, function done(err) {
	    if (err) { console.error(err); return; }
	});
	console.log("exiting function");
	return administrivia;
}

export function fetchAssignments() {
	let assignments = [];
	let thisContext = this;
	base('CS51 Assignments').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 20,
    view: "Grid view"
	}).eachPage(function page(records, fetchNextPage) {
	    // This function (`page`) will get called for each page of records.

	    records.forEach(function(assignment) {
	        console.log('Retrieved', assignment.get('Name'));
	        assignments.push(assignment);
	        thisContext.setState({ assignments });
	    });
	    // To fetch the next page of records, call `fetchNextPage`.
	    // If there are more records, `page` will get called again.
	    // If there are no more records, `done` will get called.
	    fetchNextPage();

	}, function done(err) {
	    if (err) { console.error(err); return; }
	});
	return assignments;
}

export function fetchLectureSlides() {
	let slideDecks = [];
	let thisContext = this;
	base('CS51 Lecture Slides').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 20,
    view: "Grid view"
	}).eachPage(function page(records, fetchNextPage) {
	    // This function (`page`) will get called for each page of records.

	    records.forEach(function(slideDeck) {
	        console.log('Retrieved', slideDeck.get('Name'));
	        slideDecks.push(slideDeck);
	        thisContext.setState({ slideDecks });
	    });
	    // To fetch the next page of records, call `fetchNextPage`.
	    // If there are more records, `page` will get called again.
	    // If there are no more records, `done` will get called.
	    fetchNextPage();

	}, function done(err) {
	    if (err) { console.error(err); return; }
	});
	return slideDecks;
}

export function fetchResources() {
	let resources = [];
	let thisContext = this;
	base('CS51 Resources').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 15,
    view: "Grid view"
	}).eachPage(function page(records, fetchNextPage) {
	    // This function (`page`) will get called for each page of records.

	    records.forEach(function(resource) {
	        console.log('Retrieved', resource.get('Name'));
	        resources.push(resource);
	        thisContext.setState({ resources });
	    });
	    // To fetch the next page of records, call `fetchNextPage`.
	    // If there are more records, `page` will get called again.
	    // If there are no more records, `done` will get called.
	    fetchNextPage();

	}, function done(err) {
	    if (err) { console.error(err); return; }
	});
	return resources;
}

