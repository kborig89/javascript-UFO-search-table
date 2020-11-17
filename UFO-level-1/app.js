// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!
var tbody =d3.select("tbody");

// Loop Through `data` and console.log each weather report object
tableData.forEach(function(ufoAlien) {
    console.log(ufoAlien);

 // // Step 2:  Use d3 to append one table row `tr` for each weather report object

    var row = tbody.append("tr");
 
// // Step 3:  Use `Object.entries` to console.log each weather report value
    Object.entries(ufoAlien).forEach(function([key, value]) {
    console.log(key, value);

   // // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
   // // Step 5: Use d3 to update each cell's text with

    var cell = row.append("td");
    cell.text(value);
    });
});

// Getting a reference to the button on the page with the id property set to
var button = d3.select("#filter-btn");


// Create event handlers 
button.on("click", runAlien);




// Complete the event handler function for the form
function runAlien() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

  // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
  // clear the old search content
    tbody.html("")
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredData);

  // Loop Through `filtereddata` and console.log each 
    filteredData.forEach(function(dateAlienSeen) {
    console.log(dateAlienSeen);

// // Step 2:  Use d3 to append one table row `tr` for each weather report object

    var row = tbody.append("tr");

// // Step 3:  Use `Object.entries` to console.log each weather report value
    Object.entries(dateAlienSeen).forEach(function([key, value]) {
        console.log(key, value);

// // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
// // Step 5: Use d3 to update each cell's text with

        var cell = row.append("td");
        cell.text(value);
        });
});
};

