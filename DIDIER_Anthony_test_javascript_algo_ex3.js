function create_table() {
  const body = document.getElementById("exercise3");
  tbl = document.createElement("table");
  tbl.setAttribute("id", "to_verify");
  tbl.style.border = "1px solid black";

  for (let i = 0; i < 9; i++) {
    const tr = tbl.insertRow();
    tr.setAttribute("id", "row");
    for (let j = 0; j < 9; j++) {
      const td = tr.insertCell();
      td.setAttribute("id", "cell");
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

function F31() {
  let correct = [];
  const anomaly_display = document.getElementById("anomaly_table");
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
    console.log(F21(tab[i]));
    console.log(`Line ${i + 1} incorrect`);
    let anomalies = document.createElement("p");
    if (F21(tab[i]) === false) {
      correct.push(false);
      let anomaly = document.createTextNode(`Line ${i + 1} incorrect`);
      anomaly_display.appendChild(anomalies);
      anomalies.appendChild(anomaly);
    } else {
      correct.push(true);
    }
  }
  if (!correct.includes(false)) {
    console.log("The table is correct");
    let ok = document.createTextNode("The table is correct");
    anomaly_display.appendChild(ok);
  }
}

create_table();
