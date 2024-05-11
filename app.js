function showSideBar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSideBar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

const dropdownContainer = document.querySelector('.main-nav-item');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownContainer.addEventListener('mouseenter', () => {
    dropdownMenu.style.display = 'block';
});

dropdownContainer.addEventListener('mouseleave', () => {
    dropdownMenu.style.display = 'none';
});

function toggleDropdown(){
    const dropdownSidebar = document.querySelector('.dropdown-sidebar');
    if (dropdownSidebar.style.display === 'none' || dropdownSidebar.style.display === ''){
        dropdownSidebar.style.display = 'block';
    } else {
        dropdownSidebar.style.display = 'none';
    }
}


const faqs = document.querySelectorAll(".faq");


faqs.forEach((faq) => {
    const answer = faq.querySelector(".answer");
    
    faq.addEventListener("click", () => {
        // Close all other FAQ sections
        faqs.forEach((otherFaq) => {
            if (otherFaq !== faq) {
                const otherAnswer = otherFaq.querySelector(".answer");
                otherFaq.classList.remove("active");
                otherAnswer.style.maxHeight = "0";
            }
        });

        // Toggle the active class for the clicked FAQ
        faq.classList.toggle("active");
        
        if (faq.classList.contains("active")) {
            // Calculate the height of the answer
            const answerHeight = answer.scrollHeight;
            answer.style.maxHeight = answerHeight + "px";
        } else {
            // Set the max-height to 0 to hide the answer
            answer.style.maxHeight = "0";
        }
    });
});