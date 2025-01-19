document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    const toggleModeButton = document.getElementById("toggleMode");

    // Menü açma/kapatma
    menuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });

    // Aydınlık/Karanlık Mod değiştirme
    if (localStorage.getItem("mode") === "light") {
        document.body.classList.add("light-mode");
        toggleModeButton.textContent = "Karanlık Moda Geç";
    } else {
        document.body.classList.remove("light-mode");
        toggleModeButton.textContent = "Aydınlık Moda Geç";
    }

    toggleModeButton.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        if (document.body.classList.contains("light-mode")) {
            toggleModeButton.textContent = "Karanlık Moda Geç";
            localStorage.setItem("mode", "light");
        } else {
            toggleModeButton.textContent = "Aydınlık Moda Geç";
            localStorage.setItem("mode", "dark");
        }
    });

    // Albüm tıklama yönlendirmesi
    function navigateToAlbum(albumId) {
        window.location.href = `album.html?album=${albumId}`;
    }
});
