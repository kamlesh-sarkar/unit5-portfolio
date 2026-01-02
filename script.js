// Wait for the HTML to load before running the script
document.addEventListener('DOMContentLoaded', function() {
    
    // Select the form element
    const form = document.getElementById('contactForm');

    // Add an event listener for when the form is submitted
    form.addEventListener('submit', function(event) {
        // Prevent the page from refreshing (default form behavior)
        event.preventDefault();

        // Show a popup message
        alert('Thank you, Kamlesh! Your message has been sent (simulated).');
        
        // Clear the form fields
        form.reset();
    });
});