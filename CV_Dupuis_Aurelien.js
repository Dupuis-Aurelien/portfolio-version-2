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


/* Changement théme couleurs */

/* Vert */
document.querySelector('.theme-vert').addEventListener('click', () => {

    document.documentElement.style.setProperty('--main-color', '#023618');
    document.documentElement.style.setProperty('--shade-color', '#9aec7f');
})

/* Bleu */
document.querySelector('.theme-bleu').addEventListener('click', () => {

    document.documentElement.style.setProperty('--main-color', '#222f51');
    document.documentElement.style.setProperty('--shade-color', '#03BFCB');
})

/* Rouge */
document.querySelector('.theme-rouge').addEventListener('click', () => {

    document.documentElement.style.setProperty('--main-color', '#4c0808');
    document.documentElement.style.setProperty('--shade-color', '#ff6b60');
})