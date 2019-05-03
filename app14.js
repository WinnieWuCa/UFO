// from data.js

var myTable = document.getElementById("ufo-table");
myTable.oldHTML=myTable.innerHTML;


var tableData = data;
var sightings = data;

// Select the submit button
var submit = d3.select("#filter-btn");

//////////  Button OnClick Function //////////  
submit.on("click", function() {
  // Clear previously displayed values
  myTable.innerHTML=myTable.oldHTML;
  d3.select("h2>span").text("");   

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  
  if (inputValue ==''){
  console.log("empty input");
  d3.select("h2>span").text("Please Input Value. Thanks!");   
  }
  else 
  {
  console.log("DOING FILER");
  var filteredData = sightings.filter(sightings => sightings.datetime === inputValue);

  if (filteredData ===[]){
    d3.select("h2>span").text("No sighting on that day");   
    }
    else
    {
  
// Use D3 to select the table
var table = d3.select("table");
// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped
table.attr("class", "table table-striped");

// // Use D3 to select the table body
var tbody = d3.select("tbody");

// Finally, add data to the table
//Start the loop 
// Append one table row `tr` to the table body


filteredData.forEach((sighting) => {
  console.log(sighting.datetime);
  console.log(sighting.city);
  console.log(sighting.state);
  console.log(sighting.country);
  console.log(sighting.shape);
  console.log(sighting.durationMinutes);
  console.log(sighting.comments);
  
var row = tbody.append("tr");

row.append("td").text(sighting.datetime);
row.append("td").text(sighting.city);
row.append("td").text(sighting.state);
row.append("td").text(sighting.country);
row.append("td").text(sighting.shape);
row.append("td").text(sighting.durationMinutes);
row.append("td").text(sighting.comments);
});
// End Loop
};
// End if no match
};
// End if empty
console.log("The end");
}); 
// End on click 
