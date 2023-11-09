const themeSwitcher = document.getElementById("theme-switcher");
themeSwitcher.addEventListener("click", switchTheme);

function switchTheme() {
    let cookieTheme = window.localStorage.getItem("theme");
    let newTheme = cookieTheme === "light" ? "dark" : "light";

    document
        .querySelector(":root")
        .style.setProperty("--theme-switcher-iterations", "1");

    window.localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
}
