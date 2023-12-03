const initComingSoonExpand = () => {
  const expand = (btn) => {
    if (btn.classList.contains("coming-soon__expand--expanded")) {
      btn.classList.remove("coming-soon__expand--expanded");
      btn.textContent = "И еще 17 нововведений";
      console.log("Coming soon section has been expanded");
    } else {
      btn.classList.add("coming-soon__expand--expanded");
      btn.textContent = "Свернуть";
      console.log("Coming soon section has been collapsed");
    }
  };
  const expandButton = document.querySelector(".coming-soon__expand");

  if (!expandButton) return;

  expandButton.addEventListener("click", () => expand(expandButton));
};

export default initComingSoonExpand;
