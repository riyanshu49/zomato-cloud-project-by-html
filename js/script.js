// ================================
// ZOMATO FRONTEND JAVASCRIPT
// ================================

document.addEventListener("DOMContentLoaded", function () {

    // --------------------------------
    // Header scroll animation
    // --------------------------------

    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    });


    // --------------------------------
    // Search box
    // --------------------------------

    const searchBox = document.querySelector("main input");

    const searchSuggestions = [
        "Search for pizza",
        "Search for burgers",
        "Search for biryani",
        "Search for Chinese food",
        "Search for restaurants",
        "Search for desserts",
        "Search for cafes"
    ];

    let suggestionIndex = 0;

    // Placeholder animation

    setInterval(function () {

        if (document.activeElement !== searchBox) {

            searchBox.placeholder =
                searchSuggestions[suggestionIndex];

            suggestionIndex++;

            if (suggestionIndex >= searchSuggestions.length) {
                suggestionIndex = 0;
            }

        }

    }, 2000);


    // --------------------------------
    // Search functionality
    // --------------------------------

    searchBox.addEventListener("keypress", function (event) {

        if (event.key === "Enter") {

            const searchValue = searchBox.value.trim();

            if (searchValue === "") {

                alert("Please enter something to search!");

            } else {

                alert(
                    "Searching for: " + searchValue
                );

            }

        }

    });


    // --------------------------------
    // Search focus animation
    // --------------------------------

    searchBox.addEventListener("focus", function () {

        searchBox.style.transform = "scale(1.03)";

    });

    searchBox.addEventListener("blur", function () {

        searchBox.style.transform = "scale(1)";

    });


    // --------------------------------
    // Navigation links
    // --------------------------------

    const navLinks = document.querySelectorAll("header ul li a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            const text = link.textContent.trim();

            if (text === "Login") {

                alert("Login page coming soon!");

            } else if (text === "Signup") {

                alert("Signup page coming soon!");

            } else if (text === "Add restaurant") {

                alert("Restaurant registration coming soon!");

            } else if (text === "Investor Relation") {

                alert("Investor Relations page coming soon!");

            }

        });

    });


    // --------------------------------
    // Mouse movement parallax effect
    // --------------------------------

    const heroLogo = document.querySelector("main > img");

    document.addEventListener("mousemove", function (event) {

        const x = (window.innerWidth / 2 - event.clientX) / 50;
        const y = (window.innerHeight / 2 - event.clientY) / 50;

        heroLogo.style.transform =
            `translate(${x}px, ${y}px)`;

    });


    // --------------------------------
    // Page loading animation
    // --------------------------------

    document.body.style.opacity = "0";

    setTimeout(function () {

        document.body.style.transition =
            "opacity 0.6s ease";

        document.body.style.opacity = "1";

    }, 100);

});