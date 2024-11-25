// Handling form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        alert(`Thank you, ${name}! We'll contact you at ${email}.`);
    } else {
        alert('Please fill in all fields.');
    }

    // Clear the form
    document.getElementById('contact-form').reset();
});
