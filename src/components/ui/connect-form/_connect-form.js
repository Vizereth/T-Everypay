class ConnectForm {
  constructor(form, className) {
    this.form = form;
    this.formClassName = className;

    this.userData = {
      name: { data: null, correct: false },
      email: { data: null, correct: false },
      about: { data: null, correct: false },
    };
  }

  initAll() {
    this.storage = new ConnectFormStorage();

    this.initNameField();
    this.initEmailField();
    this.initAboutField();
    this.initSubmitButton();
  }

  initNameField() {
    this.storage.userData.name = { data: null, correct: false };

    const regex = /^[a-zA-Z]{2,}\s[a-zA-Z]{2,}$/;
    const inputType = "name";
    const nameInput = this.form.querySelector(
      `.${this.formClassName}__input--name`
    );

    const workingInput = new ConnectFormInput(
      nameInput,
      regex,
      inputType,
      this.storage
    );

    workingInput.init();
  }

  initEmailField() {
    this.storage.userData.email = { data: null, correct: false };

    const regex = /^[a-z0-9]+@gmail\.com$/;
    const inputType = "email";
    const emailInput = this.form.querySelector(
      `.${this.formClassName}__input--email`
    );

    const workingInput = new ConnectFormInput(
      emailInput,
      regex,
      inputType,
      this.storage
    );
    workingInput.init();
  }

  initAboutField() {
    this.storage.userData.about = { data: null, correct: false };

    const regex = /^[a-zA-Z0-9\s\-\'\!\?\.\,]{10,500}$/;
    const inputType = "about";
    const aboutInput = this.form.querySelector(
      `.${this.formClassName}__input--about`
    );

    const workingInput = new ConnectFormInput(
      aboutInput,
      regex,
      inputType,
      this.storage
    );
    workingInput.init();
  }

  initSubmitButton() {
    const btn = this.form.querySelector(`.${this.formClassName}__btn`);

    if (!btn) return;

    btn.addEventListener("click", (e) => this.submit(e));
  }

  submit(e) {
    e.preventDefault();

    let check = true;

    for (const key in this.userData) {
      if (this.storage.userData[key].correct === false) {
        check = false;
      }
    }

    if (!check) {
      alert("Unable to submit the form");
    } else {
      this.finish();
    }
  }

  finish() {
    const form = this.form.querySelector(`.${this.formClassName}__form`);

    form.classList.add(`${this.formClassName}__form--hidden`);

    const successMsg = this.form.querySelector(
      `.${this.formClassName}__success`
    );
    successMsg.classList.add(`${this.formClassName}__success--active`);
  }
}

class ConnectFormInput {
  constructor(el, regex, type, storage) {
    this.type = type;
    this.input = el;
    this.regex = regex;
    this.storage = storage;
  }

  init() {
    if (!this.input) return;

    this.input.addEventListener("blur", () => this.check());
  }

  check() {
    const userInput = this.input.value;

    if (userInput.match(this.regex)) {
      this.isCorrect(true);
    } else {
      this.isCorrect(false);
    }
  }

  isCorrect(correct) {
    this.storage.userData[this.type]["data"] = this.input.value;

    if (!correct) {
      this.storage.userData[this.type]["correct"] = false;
    } else if (correct) {
      this.storage.userData[this.type]["correct"] = true;
    }
  }
}

class ConnectFormStorage {
  constructor() {
    this.userData = {};
  }
}

const initConnectForm = () => {
  const form = document.querySelector(".connect-form");
  const formClassName = "connect-form";

  if (!form) return;

  const newConnectForm = new ConnectForm(form, formClassName);
  newConnectForm.initAll();
};

export default initConnectForm;
