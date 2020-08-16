// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Build table
function buildTable(data) {
    tbody.html("")


    // Adding loop
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
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
