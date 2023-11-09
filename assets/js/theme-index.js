setCurrentTheme();

function setCurrentTheme() {
    let storageTheme = window.localStorage.getItem("theme");
    if (storageTheme === null) {
        storageTheme = "light";
        window.localStorage.setItem("theme", storageTheme);
    }

    document.documentElement.setAttribute(
        "data-theme",
        storageTheme === "light" ? "light" : "dark"
    );
}
