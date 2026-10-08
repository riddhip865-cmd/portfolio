// ================= MOBILE MENU =================

function toggleMenu() {
    const nav = document.getElementById("navMenu");
    nav.classList.toggle("active");
}


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document.getElementById("navMenu").classList.remove("active");

    });

});


// ================= IMAGE CLICK EFFECT =================

const galleryImages = document.querySelectorAll(
    ".gallery-item img, .architecture-image img"
);

galleryImages.forEach(function(image) {

    image.addEventListener("click", function() {

        const imageWindow = window.open("");

        imageWindow.document.write(`
            <html>
            <head>
                <title>Riddhi Visuals</title>
                <style>
                    body {
                        margin:0;
                        background:#111;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        min-height:100vh;
                    }

                    img {
                        max-width:95%;
                        max-height:95vh;
                        object-fit:contain;
                    }
                </style>
            </head>

            <body>
                <img src="${this.src}">
            </body>

            </html>
        `);

    });

});