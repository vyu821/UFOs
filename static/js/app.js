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