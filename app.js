const input = document.getElementById("input");
const output = document.getElementById("output");
const buttons = document.querySelectorAll("button");

input.addEventListener(
  "keyup",
  () => (output.innerHTML = input.value)
);

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("uppercase")) {
      output.innerHTML = output.innerHTML.toUpperCase();
    } else if (btn.classList.contains("lowercase")) {
      output.innerHTML = output.innerHTML.toLocaleLowerCase();
    } else if (btn.classList.contains("capitalize")) {
      output.innerHTML =
        output.innerHTML.charAt(0).toUpperCase() +
        output.innerHTML.slice(1).toLowerCase();
    } else if (btn.classList.contains("bold")) {
      output.style.fontWeight = "900";
    } else if (btn.classList.contains("italic")) {
      output.style.fontStyle = "italic";
    } else if (btn.classList.contains("underline")) {
      output.style.textDecoration = "underline";
    }
  });
});
