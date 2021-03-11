/* MACHINE A ECRIRE */

(function() {

    let i = -1;
    let message = "\nweb & web mobile";
    let interval = setInterval(extraire, 120);

    function extraire() {
        if (++i < message.length) {
            if (message[i] == '\n') {
                document.getElementById("auto_text").innerHTML += '<br/>';
            } else {
                document.getElementById("auto_text").innerHTML += message[i];
            }
        } else {
            clearTimeout(interval);
        }
    }
})();

/* SCROOL STIKY navigation */

window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})