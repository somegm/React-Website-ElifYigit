const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
  focusFunc.reset();
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value === "") {
    parent.classList.remove("focus");
    blurFunc.reset();
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

