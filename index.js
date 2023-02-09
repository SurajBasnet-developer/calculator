const form = document.getElementsByTagName("form");

function submit(e) {
  e.preventDefault();
  const input1 = document.querySelector(".input1");
  const input2 = document.querySelector(".input2");
  const operator = document.querySelector(".operator");

  if (!input1.value || !input2.value) {
    return alert("Both input fields must have a value.");
  }

  let value;
  if (operator.value === "+") {
    value = Number(input1.value) + Number(input2.value);
  } else if (operator.value === "-") {
    value = Number(input1.value) - Number(input2.value);
  } else if (operator.value === "*") {
    value = Number(input1.value) * Number(input2.value);
  } else if (operator.value === "/") {
    value = Number(input1.value) / Number(input2.value);
  } else {
    return alert("Please select a valid operator.");
  }

  const div = document.querySelector(".result");
  const p = document.createElement("p");
  p.innerText = value;
  div.appendChild(p);
}

form[0].addEventListener("submit", submit);
