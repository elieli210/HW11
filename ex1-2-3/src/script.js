document
  .getElementsByTagName("table")[0]
  .getElementsByTagName("thead")[0]
  .getElementsByTagName("tr")[0].style.backgroundColor = "white";
document
  .getElementsByTagName("table")[0]
  .getElementsByTagName("tbody")[0]
  .getElementsByClassName("row1")[0].style.backgroundColor = "white";
document
  .getElementsByTagName("table")[0]
  .getElementsByTagName("tbody")[0]
  .getElementsByClassName("row2")[0].style.backgroundColor = "rgb(219 234 254)";
document
  .getElementsByTagName("table")[0]
  .getElementsByTagName("tbody")[0]
  .getElementsByClassName("row3")[0].style.backgroundColor = "rgb(221 214 254)";
document
  .getElementsByTagName("table")[0]
  .getElementsByTagName("tbody")[0]
  .getElementsByClassName("row4")[0].style.backgroundColor = "rgb(209 250 229)";
document
  .getElementsByTagName("table")[0]
  .getElementsByTagName("tbody")[0]
  .getElementsByClassName("row5")[0].style.backgroundColor = "rgb(254 202 202)";
document
  .getElementsByTagName("table")[0]
  .getElementsByTagName("tbody")[0]
  .getElementsByClassName("row6")[0].style.backgroundColor = "rgb(254 243 199)";
document
  .getElementsByTagName("table")[0]
  .getElementsByTagName("tbody")[0]
  .getElementsByClassName("row7")[0].style.backgroundColor = "rgb(239 246 255)";
document
  .getElementsByTagName("table")[0]
  .getElementsByTagName("tbody")[0]
  .getElementsByClassName("row8")[0].style.backgroundColor = "rgb(245 245 244)";
document
  .getElementsByTagName("table")[0]
  .getElementsByTagName("tbody")[0]
  .getElementsByClassName("row9")[0].style.backgroundColor = "rgb(23 23 23)";

//2
function myFunction() {
  let removing = document.querySelectorAll("tr");
  for (let i = 1; i <= 5; i++) {
    removing[i].parentElement.removeChild(removing[i]);
  }
}

//3
function myFunction2() {
  for (let i = 0; i < 3; i++) {
    document.querySelector("tbody").insertRow().innerHTML =
      "<table border='1'>" +
      "<tr>" +
      "<td>myColor</td>" +
      "<td>Cell</td>" +
      "<td>Cell</td>" +
      "</tr>";
  }
}
document.getElementsByTagName("table").appendChild(newDiv);
