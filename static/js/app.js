// from data.js
var tableData = data;

///---------------------------------------------------------------///
const tbody = d3.select("tbody");

// create a fill table func.
function ftable(data) {
    tbody.html("");
    //Use forEach func. to append all rows
    data.forEach((row) => {
        // Varible that will create a row
        const table_row = tbody.append("tr");
        // Going to loop through the row and create the cells then fill in with the value
        Object.values(row).forEach((value) => {
            let cell = table_row.append("td");
                cell.text(value);
        }
    );
    });

}

function fclick() {
    //Use datetime as a filter
    const date = d3.select('#datetime').property("value");
    let filtered_data = tableData;

    //Use date entered as a filter
    if(date) {
        // Use filter to grab correct rows
        filtered_data = filtered_data.filter(row => row.datetime === date);
    }
    //Use ftable func. to fill the filtered data to correct table
    ftable(filtered_data);
}
// create a event for a button click
d3.selectAll("#filter-btn").on("click", fclick);

// build a table when the page is loaded
ftable(tableData);