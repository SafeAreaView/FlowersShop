let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//form validation

let inputs = document.querySelectorAll("input[data-rule]");
for (let input of inputs) {
  input.addEventListener("blur", function () {
    let rule = this.dataset.rule;
    let value = this.value;
    let check;

    switch (rule) {
      case "number":
        check = /^\d+$/.test(value);
        break;
      case "name":
        check = /^[А-ЯЁ][а-яё]*$/.test(value);
        break;
      case "email":
        check = /.+@.+\..+/i.test(value);
        break;
    }
    if (check) {
      this.classList.remove("invalid");
      this.classList.add("valid");
    } else {
      this.classList.remove("valid");
      this.classList.add("invalid");
    }
  });
}
