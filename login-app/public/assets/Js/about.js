// script.js

// Example: Show an alert when a user clicks the "Login" button
document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('.btn-warning');
    loginButton.addEventListener('click', function () {
        alert('Redirecting to login page...');
    });
});

// Example: Smooth scroll to sections (if the page expands in future)
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Example: Validate form (if you add a ticket reservation form)
function validateForm() {
    const ticketCode = document.getElementById('ticketCode').value;
    if (!ticketCode) {
        alert('Please enter your ticket code.');
        return false;
    }
    return true;
}

// Example: Toggle visibility of Terms & Conditions
document.querySelector('.text-primary').addEventListener('click', function () {
    const termsList = document.querySelector('ul');
    if (termsList.style.display === 'none') {
        termsList.style.display = 'block';
    } else {
        termsList.style.display = 'none';
    }
});
