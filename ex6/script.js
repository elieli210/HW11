/* write a function that add two inputs values and show them below of inputs and
when the result is Odd the result color is Red and when it is Even the color is Blue. */

function getAdd() {
  let value1 = document.getElementById("val1").value;
  let value2 = document.getElementById("val2").value;
  let sum = Number(value1) + Number(value2);
  document.getElementById("result").innerHTML = sum;
  if(sum%2===0)
  document.getElementById("result").style.color = 'blue';
  else 
  document.getElementById("result").style.color = 'red';
}




