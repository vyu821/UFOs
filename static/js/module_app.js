// import data from data.js
const tableData = data;

// reference the HTML table using d3
// tell JS what type of element the data will be displayed in
// look for <tbody> tags in the HTML
var tbody = d3.select('tbody');

// function to build table
function buildTable(data) {

    // clear existing data
    tbody.html('');

    // loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        
        // tells JS to find <tbody> tag in HTML and add a table row <tr>
        let row = tbody.append('tr');

        // loops through each value in dataRow
        // and add each value as a table cell <td>
        Object.values(dataRow).forEach((val) => {
            
            // add each value to a cell in the table, table data tag <td>
            let cell = row.append('td');
            // extract only the text of the value
            cell.text(val);
        });
    });
};

// function that handles the clicking of the filter button
function handleClick() {

    // look for #datetime id in HTMl tags
    // get the value from where the date values are stored, save in variable date
    let date = d3.select('#datetime').property('value');

    // default filter variable
    let filteredData = tableData;

    // check to see if a date is selected
    if (date) {

        // filter the default table data to show only the date entered
        filteredData = filteredData.filter(row => row.datetime == date);
    };

    // rebuild table using filtered data
    buildTable(filteredData);
};

// listens for when the filter button is clicked
// selects all filter-btn ids and when it is clicked, run the handleClick function
d3.selectAll('#filter-btn').on('click', handleClick);

// build the table when the page loads
buildTable(tableData);