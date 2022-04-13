export const changeBodyColor = () => {
  setTimeout(() => {
    const body = document.body;
    body.setAttribute("style", "background: #666");
  }, 1000);
};
