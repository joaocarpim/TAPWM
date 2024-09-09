function transformText() {
  let textInput = document.getElementById("textInput").value;
  let uppercaseCheckbox = document.getElementById("uppercaseCheckbox").checked;
  let lowercaseCheckbox = document.getElementById("lowercaseCheckbox").checked;

  if (uppercaseCheckbox) {
    textInput = textInput.toUpperCase();
  } else if (lowercaseCheckbox) {
    textInput = textInput.toLowerCase();
  }

  document.getElementById("textInput").value = textInput;
}
