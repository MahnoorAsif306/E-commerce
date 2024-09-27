// SLIDER
let currentIndex = 0;
const itemsToShow = 5; // Number of images to show
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function updateButtonState() {
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    // Disable next button if at the last set of images
    nextButton.disabled = currentIndex + itemsToShow >= totalItems;

    // Disable prev button if at the first set of images
    prevButton.disabled = currentIndex === 0;
}

function showSlide(index) {
    currentIndex = (index + totalItems) % totalItems; // Loop around

    const offset = -(currentIndex * (100 / itemsToShow));
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(${offset}%)`;

    updateButtonState(); // Update button state after showing the slide
}

function nextSlide() {
    if (currentIndex + itemsToShow < totalItems) {
        showSlide(currentIndex + 1);
    }
}

function prevSlide() {
    if (currentIndex > 0) {
        showSlide(currentIndex - 1);
    }
}

// // Initial button state
// updateButtonState();


let cartCount = 0;

        function increaseCartCount() {
            cartCount++;
            document.getElementById('cart-count').innerText = cartCount;
        }
        function decreaseCartCount() {
            cartCount--;
            document.getElementById('cart-count').innerText = cartCount;
        }
        async function apiFetch() {
            try {
                const response = await fetch('YOUR_API_URL_HERE'); 
                const res = await response.json();
                let show = document.getElementById("api");
                show.innerHTML = '';
                for (const item of res) {
                    const result = item.title;
                    console.log(result);
                    show.innerHTML += `<p>${result}</p>`;
                }
            } catch (error) {
                console.error(error.message);
            }
        }
        let btn = document.getElementById("btn");
        let div = document.getElementById("api");
        
        btn.addEventListener("click", () => {
            apiFetch();
            div.className = "cart-pop-up"; 

        });

