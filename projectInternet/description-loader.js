
$(document).ready(function () {
   
    const pageName = window.location.pathname.split("/").pop();

    // Fetch the JSON data
    $.getJSON("cars.json", function (data) {
        // Find the car object 
        const car = data.find(car => car.page === pageName);

        // Display the car details if found
        if (car) {
            const descriptionContainer = $("#car-description");
            descriptionContainer.html(`
                <h3>${car.brand} ${car.model}</h3>
                <p>${car.details}</p>
            `);
        }
    });
});


