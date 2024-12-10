document.addEventListener("DOMContentLoaded", () => {
    const carDetails = {
        bmw: {
            title: "BMW Series 3",
            description: "A luxurious sedan known for its performance and elegance.",
            image: "images/bmw3series.png",
            specifications: {
                "Engine Type": "V6 Turbo",
                Horsepower: "300 hp",
                "Fuel Type": "Gasoline"
            }
        },
        audi: {
            title: "Audi Q5",
            description: "A compact SUV that blends luxury and utility.",
            image: "images/q5.png",
            specifications: {
                "Engine Type": "Inline-4 Turbo",
                Horsepower: "248 hp",
                "Fuel Type": "Gasoline"
            }
        },
        mercedes: {
            title: "Mercedes E-Class",
            description: "An executive sedan that epitomizes luxury and performance.",
            image: "images/eclass.png",
            specifications: {
                "Engine Type": "V6",
                Horsepower: "362 hp",
                "Fuel Type": "Gasoline"
            }
        }
    };

    const detailsSection = document.getElementById("car-details");
    const carImage = document.getElementById("car-image");
    const carTitle = document.getElementById("car-title");
    const carDescription = document.getElementById("car-description");
    const specificationsList = document.getElementById("specifications");

    document.querySelectorAll(".view-details").forEach(button => {
        button.addEventListener("click", event => {
            event.preventDefault();

            const carType = button.closest(".car-card").dataset.car;
            const carData = carDetails[carType];

            if (carData) {
                carImage.src = carData.image;
                carTitle.textContent = carData.title;
                carDescription.textContent = carData.description;

                specificationsList.innerHTML = `
                    <ul>
                        <li><strong>Engine Type:</strong> ${carData.specifications["Engine Type"]}</li>
                        <li><strong>Horsepower:</strong> ${carData.specifications.Horsepower}</li>
                        <li><strong>Fuel Type:</strong> ${carData.specifications["Fuel Type"]}</li>
                    </ul>
                `;

                detailsSection.style.display = "block";
                detailsSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
