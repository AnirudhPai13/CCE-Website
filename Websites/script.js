function toggleDetails() {
    const detailsSection = document.getElementById('details');
    const isVisible = detailsSection.style.display === 'block';

    // Toggle visibility of details section
    detailsSection.style.display = isVisible ? 'none' : 'block';

    // Add event listener to hide details section when clicking outside
    if (!isVisible) {
        document.addEventListener('click', closeDetailsOnClickOutside);
    }
}

function closeDetailsOnClickOutside(event) {
    const detailsSection = document.getElementById('details');
    const facultyCard = document.querySelector('.faculty-card');

    // Check if the click happened outside the details section and faculty card
    if (!detailsSection.contains(event.target) && !facultyCard.contains(event.target)) {
        detailsSection.style.display = 'none';
        document.removeEventListener('click', closeDetailsOnClickOutside);
    }
}

function toggleAccordion(button) {
    const content = button.nextElementSibling;
    const isVisible = content.style.display === 'block';

    // Close all accordion items
    document.querySelectorAll('.accordion-content').forEach((item) => {
        item.style.display = 'none';
    });

    // Open the clicked accordion item
    if (!isVisible) {
        content.style.display = 'block';
    }
}
