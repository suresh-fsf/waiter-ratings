// Creates Table for new data
let table = document.querySelector("table");
// generateTableHead(table);
// let data = Object.keys(tipTable[0]);
// console.log (data)

// function generateTableHead(table, data) {
//   let thead = table.createTHead();
//   let row = thead.insertRow();
//   for (let key of data) {
//     // let th = document.createElement("th");
//     let text = document.createTextNode(key);
//     thead.appendChild(text);
//     row.appendChild(thead);
//   }
// }
function getTips() {
  console.log("getTips")
  $.get("/api/tips", function (data) {
    console.log(data)
    generateTable(table, data)
  })
}
function generateTable(table, data) {
  for (let element of data) {
    console.log(element.name)
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

getTips();