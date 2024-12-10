
$(document).ready(function () {
    
    // Function to set a cookie
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = "expires=" + date.toUTCString();
        document.cookie = `${name}=${value}; ${expires}; path=/`;
    }

    // Function to get a cookie
    function getCookie(name) {
        const cookies = document.cookie.split("; ");
        for (let cookie of cookies) {
            const [key, value] = cookie.split("=");
            if (key === name) {
                return value;
            }
        }
        return "";
    }

    // Prefill  search input with the last search 
    const lastSearch = getCookie("lastSearch");
    if (lastSearch) {
        $("#search").val(lastSearch);
    }


    $("#filter-form").on("submit", function (event) {
        event.preventDefault();

        // Get user input and clean up spaces
        const searchInput = $("#search").val().trim().toLowerCase();
        const errorMessage = $("#error-message");
        const carList = $("#car-list");
        const searchResultsSection = $(".search-results");

        // Clear previous results
        carList.empty();
        errorMessage.hide();

        if (searchInput === "") {
            // Show error for empty input
            errorMessage.text("Please enter a brand to search.").show();
            searchResultsSection.hide(); // Hide results if  invalid
            return;
        }

        // Save search term in cookie
        setCookie("lastSearch", searchInput, 7); // 7 days or one week 

        // cars
        const cars = [
            {
                brand: "bmw",
                model: "BMW Series 3",
                description: "Luxury SUV with advanced features.",
                image: "images/bmw3series.png",
            },
            {
                brand: "audi",
                model: "Audi Q5",
                description: "Sporty sedan with a sleek design.",
                image: "images/q5.png",
            },
            {
                brand: "mercedes",
                model: "Mercedes-Benz E-Class Executive",
                description: "Elegant and comfortable luxury car.",
                image: "images/eclass.png",
            },
        ];

        // Filter results
        const filteredCars = cars.filter(car => car.brand.includes(searchInput));

        if (filteredCars.length > 0) {
            filteredCars.forEach(car => {
                carList.append(`
                    <div class="car-card">
                        <img src="${car.image}" alt="${car.model}">
                        <div class="car-info">
                            <h3>${car.model}</h3>
                            <p>${car.description}</p>
                        </div>
                    </div>
                `);
            });

            searchResultsSection.show(); // Show results 
        } else {
            // Show no results message
            carList.append(`<p>No results found for "${searchInput}".</p>`);
            searchResultsSection.show();
        }
    });
});
