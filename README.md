# UFOs

-------------------------------------------------------------------------------------------------
## Executive Overview ##
-------------------------------------------------------------------------------------------------

This project was very interesting indeed but it is still a work in progress.  We need more time to
debug certain issues in the index.html and app.js files.  While I was successful in developing the
page as intended by my employer, there seems to be an issue with the syntax for filtering.

In adding the link to the D3.js CDN and the file paths for the data.js and app.js files to the 
index.html file, the refreshed page does not produce any filtered data in the table.  In light of
this, I did not bother to pursue the main objectives of the assignment as it would prove futile if
the page is not filtering any data by datetime.

Deeper analysis and inspection of both the app.js and index.html files are required to resolve
project issues.

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
These are the links to my app.js and html files:
https://github.com/GR8505/UFOs/blob/master/static/js/app.js
https://github.com/GR8505/UFOs/blob/master/index.html

As mentioned earlier the web page opens as intended but no information is provided in the table.
![](https://github.com/GR8505/UFOs/blob/master/static/images/Webpage.png)

Clearly, the table is in the wrong position and it has no data.  Furthermore, clicking refresh or
the filter button fails to produce any results.

-------------------------------------------------------------------------------------------------
## Attempted Solutions ##
-------------------------------------------------------------------------------------------------
The following alterations were made in an attempt to fix the abovementioned issue:

1) Adding semicolons at the end of certain syntax.  I thought that this may have been the cause of
the problem but this failed to alter the result.

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

2) Altering the indentation in the index.html file. However, this did not change the result.
------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------
## Key Takeaway points ##
------------------------------------------------------------------------------------------------
1) Need to review syntax in both app.js and index.html files as I highly suspect that there is 
a specific line of code that is missing in my solution.
2) The issue might most likely be with the syntax for buildTable function in the app.js file
------------------------------------------------------------------------------------------------




