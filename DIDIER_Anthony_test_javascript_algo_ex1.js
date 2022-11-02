function create_table() {
  const body = document.getElementById("exercise1");
  tbl = document.createElement("table");
  tbl.setAttribute("id", "to_verify");
  tbl.style.border = "1px solid black";

  for (let i = 0; i < 9; i++) {
    const tr = tbl.insertRow();
    tr.setAttribute("id", "row");
    for (let j = 0; j < 9; j++) {
      const td = tr.insertCell();
      td.setAttribute("id", "cell");
      td.style.border = "1px solid black";
      td.style.width = "50px";
      td.style.height = "50px";
    }
  }
  body.appendChild(tbl);
}

function F11() {
  tbl = document.getElementById("to_verify");
  const tblBody = document.createElement("tbody");

  // filling all cells
  for (let i = 0; i < 9; i++) {
    // fills a table row
    row = document.getElementById("row");

    for (let j = 0; j < 9; j++) {
      // Fill a <td> element with a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var array_number = new Array(9);
      array_number[0] = "4 2 7 3 5 1 9 8 6";
      array_number[1] = "9 8 3 7 6 2 5 1 4";
      array_number[2] = "1 5 6 8 9 4 7 2 3";
      array_number[3] = "2 3 9 1 8 5 4 6 7";
      array_number[4] = "7 4 1 6 3 9 2 5 8";
      array_number[5] = "5 6 8 2 4 7 1 3 9";
      array_number[6] = "8 7 2 9 1 3 6 4 5";
      array_number[7] = "3 9 5 4 2 6 8 7 1";
      array_number[8] = "6 1 4 5 7 8 3 9 6";
      array_number[i] = array_number[i].replace(/ /g, "");
      cell = document.getElementById("cell");
      let cellText = document.createTextNode(array_number[i][j]);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }
  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
}

function F12() {
  document.body.appendChild(tbl);
  // sets the border attribute of tbl to '2'
  tbl.setAttribute("border", "2");
}

create_table();
F11();
F12();
