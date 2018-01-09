const Airtable = require('airtable');
const base = new Airtable({apiKey: 'keyJoo0QH6ip5yH4S'}).base('app2yrNbBNc7l94XW');

export function fetchAdministrivia() {
	let administrivia = [];
	base('CS51 Administrivia').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 3,
    view: "Grid view"
	}).eachPage(function page(records, fetchNextPage) {
	    // This function (`page`) will get called for each page of records.

	    records.forEach(function(handout) {
	        console.log('Retrieved', handout.get('Name'));
	        administrivia.push(handout);

	    });
	    // To fetch the next page of records, call `fetchNextPage`.
	    // If there are more records, `page` will get called again.
	    // If there are no more records, `done` will get called.
	    fetchNextPage();

	}, function done(err) {
	    if (err) { console.error(err); return; }
	});
	return administrivia;
}

export function fetchAssignments() {
	let assignments = [];
	base('CS51 Assignments').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 3,
    view: "Grid view"
	}).eachPage(function page(records, fetchNextPage) {
	    // This function (`page`) will get called for each page of records.

	    records.forEach(function(assignment) {
	        console.log('Retrieved', assignment.get('Name'));
	        assignments.push(assignment);

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

