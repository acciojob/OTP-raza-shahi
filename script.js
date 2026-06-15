const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, index) => {
  code.addEventListener("input", (e) => {
    if (index < codes.length - 1 && e.target.value !== "") {
      codes[index + 1].focus();
    }
  });

  code.addEventListener("keyup", (e) => {
    if (e.key === "Backspace" && index > 0) {
      codes[index - 1].focus();
    }
  });
});