const enableDarkmode = () => {
    document.body.classList.add("dark__theme");
    localStorage.setItem("darkMode", "active");
};

const disableDarkmode = () => {
    document.body.classList.remove("dark__theme");
    localStorage.removeItem("darkMode");
};

// Recupera el estado de localStorage
let storedDarkModePreference = localStorage.getItem("darkMode");

// Deshabilita transiciones al cargar la web
document.body.classList.add("no-transition");

// Las transiciones se activan para interacciones posteriores
setTimeout(() => {
    document.body.classList.remove("no-transition");
}, 0);

// Preferencia de usuario
if (storedDarkModePreference === "active") {
    enableDarkmode();
} else if (storedDarkModePreference === null && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    enableDarkmode();
}

/*Acción de cambiar de tema al hacer click en el botón*/
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const currentMode = localStorage.getItem("darkMode");
        if (currentMode === "active") {
            disableDarkmode();
        } else {
            enableDarkmode();
        }
    });
} else {
    console.error("Elemento con ID 'theme-toggle' no encontrado. Asegúrate de que existe en tu HTML.");
}