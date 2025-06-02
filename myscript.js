document.querySelectorAll(".my-input").forEach(input => {
  input.addEventListener("input", () => {
    if (input.value.trim() === "") {
    input.classList.add('empty');
    } else {
    input.classList.remove('empty');
  }
  });
});