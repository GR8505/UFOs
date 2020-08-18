# UFOs

-------------------------------------------------------------------------------------------------
## Executive Overview ##
-------------------------------------------------------------------------------------------------

This project was very interesting indeed but it is still a work in progress.  We need more time to
debug certain issues in the index.html and app.js files.  While I was successful in developing the
page as intended by my employer, there seems to be an issue with the syntax for filtering.

In adding the link to the D3.js CDN and the file paths for the data.js and app.js files to the 
index.html file, the refreshed page does not produce any filtered data in the table.  

------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------
## Assignment Objectives ##
------------------------------------------------------------------------------------------------
1) Add filters for the following:
  - Date
  - City
  - State
  - Country
  - Shape
2) Project description in Readme file
3) Updated app.js file
4) Clean website with fully functioning filter table
------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------
## Debugging Issues ##
------------------------------------------------------------------------------------------------
This is the link to my app.js file:

// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Build table
function buildTable(data) {
    tbody.html("");


    // Adding loop
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

// Adding filters with D3
function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;


    // Creating if statement
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);    

// Rebuild the table using the filtered data
buildTable(tableData);
