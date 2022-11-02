function create_table() {
  const body = document.getElementById("exercise3");
  tbl = document.createElement("table");
  tbl.setAttribute("id", "to_verify2");
  tbl.style.border = "1px solid black";

  for (let i = 0; i < 9; i++) {
    const tr = tbl.insertRow();
    tr.setAttribute("id", "row2");
    for (let j = 0; j < 9; j++) {
      const td = tr.insertCell();
      td.setAttribute("id", "cell2");
      var input = document.createElement("input");
      input.setAttribute("id", "input");
      input.type = "text";
      input.style.width = "20px";
      tr.cells[j].appendChild(input);
      td.style.border = "1px solid black";
      td.style.width = "50px";
      td.style.height = "50px";
    }
  }
  body.appendChild(tbl);
}

function fill_table() {
  tbl = document.getElementById("to_verify2");
  const tblBody = document.createElement("tbody2");

  // filling all cells
  for (let i = 0; i < 9; i++) {
    // fills a table row
    row = document.getElementById("row2");

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
      cell = document.getElementById("cell2");
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

function F31() {
  document.getElementById("anomaly_display").innerHTML = "";
  // correct : array with true or false results of the consitions below
  let correct = [];
  const anomaly_display = document.getElementById("anomaly_display");
  for (var i = 0; i < 9; i++) {
    var tab = new Array(9);
    tab[0] = [4, 2, 7, 3, 5, 1, 9, 8, 6];
    tab[1] = [9, 8, 3, 7, 6, 2, 5, 1, 4];
    tab[2] = [1, 5, 6, 8, 9, 4, 7, 2, 3];
    tab[3] = [2, 3, 9, 1, 8, 5, 4, 6, 7];
    tab[4] = [7, 4, 1, 6, 3, 9, 2, 5, 8];
    tab[5] = [5, 6, 8, 2, 4, 7, 1, 3, 9];
    tab[6] = [8, 7, 2, 9, 1, 3, 6, 4, 5];
    tab[7] = [3, 9, 5, 4, 2, 6, 8, 7, 1];
    tab[8] = [6, 1, 4, 5, 7, 8, 3, 9, 6];
    // console.log(F21(tab[i]));
    // console.log(`Line ${i + 1} incorrect`);
    F21(tab[i]);
    let anomalies = document.createElement("p");
    if (F21(tab[i]) === false) {
      correct.push(false);
      let anomaly = document.createTextNode(
        `Line ${i + 1} incorrect : ${tab[i]}`
      );
      anomaly_display.appendChild(anomalies);
      anomalies.appendChild(anomaly);
    } else {
      correct.push(true);
    }
  }
  // check if there are NOT any false result in the array correct
  if (!correct.includes(false)) {
    console.log("The table is correct");
    let ok = document.createTextNode("The table is correct");
    anomaly_display.appendChild(ok);
  }
  document.getElementById("result_display").innerHTML = "";
}

function F32() {
  // document.getElementById("anomaly_display").innerHTML = "";
  // // correct : array with true or false results of the consitions below
  // let correct = [];
  // const anomaly_display = document.getElementById("anomaly_display");
  // for (var i = 0; i < 9; i++) {
  //   var tab = new Array(9);
  //   tab[0] = [4, 2, 7, 3, 5, 1, 9, 8, 6];
  //   tab[1] = [9, 8, 3, 7, 6, 2, 5, 1, 4];
  //   tab[2] = [1, 5, 6, 8, 9, 4, 7, 2, 3];
  //   tab[3] = [2, 3, 9, 1, 8, 5, 4, 6, 7];
  //   tab[4] = [7, 4, 1, 6, 3, 9, 2, 5, 8];
  //   tab[5] = [5, 6, 8, 2, 4, 7, 1, 3, 9];
  //   tab[6] = [8, 7, 2, 9, 1, 3, 6, 4, 5];
  //   tab[7] = [3, 9, 5, 4, 2, 6, 8, 7, 1];
  //   tab[8] = [6, 1, 4, 5, 7, 8, 3, 9, 6];
  //   // console.log(F21(tab[i]));
  //   // console.log(`Line ${i + 1} incorrect`);
  //   F21(tab[i]);
  //   let anomalies = document.createElement("p");
  //   if (F21(tab[i]) === false) {
  //     correct.push(false);
  //     let anomaly = document.createTextNode(
  //       `Line ${i + 1} incorrect : ${tab[i]}`
  //     );
  //     anomaly_display.appendChild(anomalies);
  //     anomalies.appendChild(anomaly);
  //   } else {
  //     correct.push(true);
  //   }
  // }
  // // check if there are NOT any false result in the array correct
  // if (!correct.includes(false)) {
  //   console.log("The table is correct");
  //   let ok = document.createTextNode("The table is correct");
  //   anomaly_display.appendChild(ok);
  // }
  // document.getElementById("result_display").innerHTML = "";
}

function F33() {
  // document.getElementById("anomaly_display").innerHTML = "";
  // // correct : array with true or false results of the consitions below
  // let correct = [];
  // const anomaly_display = document.getElementById("anomaly_display");
  // for (var i = 0; i < 9; i++) {
  //   var tab = new Array(9);
  //   tab[0] = [4, 2, 7, 3, 5, 1, 9, 8, 6];
  //   tab[1] = [9, 8, 3, 7, 6, 2, 5, 1, 4];
  //   tab[2] = [1, 5, 6, 8, 9, 4, 7, 2, 3];
  //   tab[3] = [2, 3, 9, 1, 8, 5, 4, 6, 7];
  //   tab[4] = [7, 4, 1, 6, 3, 9, 2, 5, 8];
  //   tab[5] = [5, 6, 8, 2, 4, 7, 1, 3, 9];
  //   tab[6] = [8, 7, 2, 9, 1, 3, 6, 4, 5];
  //   tab[7] = [3, 9, 5, 4, 2, 6, 8, 7, 1];
  //   tab[8] = [6, 1, 4, 5, 7, 8, 3, 9, 6];
  //   // console.log(F21(tab[i]));
  //   // console.log(`Line ${i + 1} incorrect`);
  //   F21(tab[i]);
  //   let anomalies = document.createElement("p");
  //   if (F21(tab[i]) === false) {
  //     correct.push(false);
  //     let anomaly = document.createTextNode(
  //       `Line ${i + 1} incorrect : ${tab[i]}`
  //     );
  //     anomaly_display.appendChild(anomalies);
  //     anomalies.appendChild(anomaly);
  //   } else {
  //     correct.push(true);
  //   }
  // }
  // // check if there are NOT any false result in the array correct
  // if (!correct.includes(false)) {
  //   console.log("The table is correct");
  //   let ok = document.createTextNode("The table is correct");
  //   anomaly_display.appendChild(ok);
  // }
  // document.getElementById("result_display").innerHTML = "";
}

create_table();
fill_table();
