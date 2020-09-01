var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lists = document.getElementsByTagName("li");
console.log(lists);
var deleteButtons = document.getElementsByClassName("delete");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  // list element
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  // button element
  var btn = document.createElement("button");
  btn.appendChild(document.createTextNode("Delete"));
  // append list and button elements
  li.appendChild(btn);
  ul.appendChild(li);
  // add event listeners to list and button elements
  li.addEventListener("click", toggleAfterClick);
  btn.addEventListener("click", deleteAfterClick);
  // clear input
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function toggleAfterClick() {
  this.classList.toggle("done");
}

function deleteAfterClick() {
  this.parentNode.remove();
}

// Add event listener to enter button
button.addEventListener("click", addListAfterClick);

// Add event listener to enter key
input.addEventListener("keypress", addListAfterKeypress);

// Add event listeners to each list item
for (var i = 0; i < lists.length; i++) {
  lists[i].addEventListener("click", toggleAfterClick);
}

// Add event listeners to each delete button
for (var i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener("click", deleteAfterClick);
}
