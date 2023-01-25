let toggle = false;
let theme = document.querySelector("#theme");
const changeTheme = () => {
  theme.classList.toggle("active");
  if (!toggle) {
    document.documentElement.style.setProperty("--black", "#fff");
    document.documentElement.style.setProperty("--white", "#282828");
    document.documentElement.style.setProperty("--line", "#4d4d4d");
    document.documentElement.style.setProperty("--today", "#1a1a1a");
  } else {
    document.documentElement.style.setProperty("--black", "#282828");
    document.documentElement.style.setProperty("--white", "#fff");
    document.documentElement.style.setProperty("--line", "#d6d6d6");
    document.documentElement.style.setProperty("--today", "#505050");
  }
  toggle = !toggle;
};
