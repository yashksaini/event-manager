let toggle = false;
let theme = document.querySelector("#theme");
const changeTheme = () => {
  theme.classList.toggle("active");
  if (!toggle) {
    document.documentElement.style.setProperty("--black", "#f0f0f0");
    document.documentElement.style.setProperty("--white", "#1a1a1a");
    document.documentElement.style.setProperty("--line", "#4d4d4d");
    document.documentElement.style.setProperty("--today", "#1a1a1a");
    theme.innerHTML = `<span class="material-symbols-outlined">light_mode</span>`;
  } else {
    document.documentElement.style.setProperty("--black", "#1a1a1a");
    document.documentElement.style.setProperty("--white", "#f0f0f0");
    document.documentElement.style.setProperty("--line", "#d6d6d6");
    document.documentElement.style.setProperty("--today", "#505050");
    theme.innerHTML = `<span class="material-symbols-outlined">dark_mode</span>`;
  }
  toggle = !toggle;
};
