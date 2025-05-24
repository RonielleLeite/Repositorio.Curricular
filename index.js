window.addEventListener("scroll", function() {
    var nav = document.querySelector(".nav");
    if (window.scrollY > 50) { 
        nav.classList.add("scroll"); // Aplica a classe quando rolar
    } else {
        nav.classList.remove("scroll"); // Remove a classe quando estiver no topo
    }
});