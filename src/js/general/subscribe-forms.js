import SubscribeForm from "../../components/ui/subscribe-form/_subscribe-form.js";

const initSubscribeForms = () => {
  const className = "subscribe-form";
  const forms = document.querySelectorAll(`.${className}`);

  if (!forms) return;

  forms.forEach((form) => {
    const newForm = new SubscribeForm(form, className);
    newForm.init();
  });
};

export default initSubscribeForms;
