const Airtable = require('airtable');
const base = new Airtable({apiKey: 'keyJoo0QH6ip5yH4S'}).base('app2yrNbBNc7l94XW');

export function fetchProjects() {
	let projects = [];
	base('Projects').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 3,
    view: "Grid view"
	}).eachPage(function page(_projects, fetchNextPage) {
	    // This function (`page`) will get called for each page of records.

	    _projects.forEach(function(project) {
	        console.log('Retrieved', project.get('project_name'));
	        projects.push(project);

	    });
	    // To fetch the next page of records, call `fetchNextPage`.
	    // If there are more records, `page` will get called again.
	    // If there are no more records, `done` will get called.
	    fetchNextPage();

	}, function done(err) {
	    if (err) { console.error(err); return; }
	});
	return projects;
}
