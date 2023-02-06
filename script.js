const btnNumbers = document.querySelectorAll(".btn-number");
const btnSubmit = document.querySelector(".btn-submit");
const container = document.querySelector(".container");

btnNumbers.forEach((btn) => {
  btn.addEventListener("click", () => {
    btnNumbers.forEach((b) => {
      b.classList.remove("selected");
    });
    btn.classList.add("selected");
  });
});

btnSubmit.addEventListener("click", () => {
  let selectedBtn;
  btnNumbers.forEach((btn) => {
    if (btn.classList.contains("selected")) {
      selectedBtn = btn;
    }
  });
  if (selectedBtn) {
    const stars = selectedBtn.textContent;
    container.innerHTML = `
    <div class="container-2">
      <div class="thank-you">
        <img src="images/illustration-thank-you.svg" alt="thank you message">
      </div>
      <div class="your-select">
        <p>You selected ${stars} out of 5</p>
      </div>
      <div class="text-content-2">
        <h1>Thank you!</h1>
        <p>We aprecciate you taking the time to give a rating. If you ever need more support, dont hesitate to get in touch!</p>
      </div>
    </div>`;
  }
});
