class SubscribeForm {
  constructor(form, className) {
    this.form = form;
    this.className = className;
  }

  init() {
    const submitButton = this.form.querySelector(`.${this.className}__btn`);
    submitButton.addEventListener("click", (e) => this.checkData(e));
  }

  checkData(e) {
    e.preventDefault();

    const regex = /^[a-z0-9]+@gmail\.com$/;
    const inputField = this.form.querySelector(`.${this.className}__input`);

    const userInput = inputField.value;

    if (userInput.match(regex)) {
      this.submitForm(true);
    } else {
      this.submitForm(false);
    }
  }

  submitForm(isDataCorrect) {
    const form = this.form.querySelector(`.${this.className}__form`);
    const successMessage = this.form.querySelector(
      `.${this.className}__success`
    );

    if (isDataCorrect) {
      form.classList.remove(`${this.className}__form--active`);
      successMessage.classList.add(`${this.className}__success--active`);
    } else {
      alert(`Invalid Email`);
    }
  }
}

export default SubscribeForm;
