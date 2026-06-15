//your JS code here. If required.
const inputs = document.getElementById("code-container");
codes[0].focus();
inputs.addEventListener("input", (e) => {
  const target = e.target;
  const value = target.value;
  if (isNaN(value)) {
    target.value = "";
    return;
  }

  if (value != "") {
    const next = target.nextElementSibling;
    if (next) {
      next.focus();
    }
  }
});

inputs.addEventListener("keyup", (e) => {
  const target = e.target;
  const key = e.key.toLowerCase();
  if (key === "backspace" || key === "delete") {
    target.value = "";
    const prev = target.previousElementSibling;
    if (prev) {
      prev.focus();
    }
    return;
  }
});
