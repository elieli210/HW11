let createTable = document.querySelector(".table");

let employees = [
  { name: "James", age: 9, country: "United States" },
  { name: "Rony", age: 31, country: "United Kingdom" },
  { name: "Peter", age: 58, country: "Canada" },
  { name: "Marks", age: 20, country: "Spain" },
];

let headers = ["Name", "Age", "Country"];
let table = document.createElement("table");
let headerRow = document.createElement("tr");
//create header on table
headers.forEach((item) => {
  let header = document.createElement("th");
  let textNode = document.createTextNode(item);
  header.appendChild(textNode);
  headerRow.appendChild(header);
});

table.appendChild(headerRow);

//create all row and columns of table and conditions  
employees.forEach((item) => {
  let row = document.createElement("tr");
  let array = Object.values(item);
  if (array[1] < 10) row.style.backgroundColor = "yellow";
  else if (array[1] >= 10 && array[1] < 40) row.style.backgroundColor = "green";
  else if (array[1] >= 40 && array[1] < 80) row.style.backgroundColor = "red";
  else if (array[1] >= 80) row.style.backgroundColor = "blue";

  Object.values(item).forEach((item) => {
    let cell = document.createElement("td");
    let textNode = document.createTextNode(item);
    cell.appendChild(textNode);
    row.appendChild(cell);
  });

  table.appendChild(row);
});

// for border of table
table.setAttribute("border", "2");
table.style.margin = "2rem auto";
//
createTable.appendChild(table);
