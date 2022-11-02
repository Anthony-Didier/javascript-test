function create_table() {
  const body = document.getElementById("exercise2");
  tbl = document.createElement("table");
  tbl.setAttribute("id", "to_check");
  tbl.style.border = "1px solid black";

  for (let i = 0; i < 1; i++) {
    const tr = tbl.insertRow();
    tr.setAttribute("id", "row2");
    for (let j = 0; j < 9; j++) {
      const td = tr.insertCell();
      td.setAttribute("id", "cell2");
      var input = document.createElement("input");
      input.setAttribute("id", "input2");
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

function F21(a) {
  let numbersAlreadySeen = [];
  let results = [];
  const result_display = document.getElementById("result_display");
  for (var i = 0; i < a.length; i++) {
    let number = a[i];
    // let data_input = document.getElementById("input2");
    // console.log(data_input.value);
    // check if every value is a number
    if (typeof number === "number") {
      // check if every value is a number between 1 and 9
      if (a[i] >= 1 && a[i] <= 9) {
        // check if every value is different
        if (numbersAlreadySeen.indexOf(number) !== -1) {
          results.push(false);
        } else {
          numbersAlreadySeen.push(number);
          results.push(true);
        }
      } else {
        results.push(false);
      }
    } else {
      results.push(false);
    }
    // let val = document.querySelector("input").value;
    // console.log(val);
  }
  console.log(a);
  let array = document.createTextNode(`${a}`);
  result_display.appendChild(array);
  let result = document.createElement("p");
  if (results.includes(false)) {
    let result_value = document.createTextNode(false);
    result_display.appendChild(result);
    result.appendChild(result_value);
    return false;
  } else {
    let result_value = document.createTextNode(true);
    result_display.appendChild(result);
    result.appendChild(result_value);
    return true;
  }
}

var tab = [4, 2, 7, 3, 5, 1, 9, 8, 6];

create_table();
