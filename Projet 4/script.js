// Load saved balance on page load
document.addEventListener("DOMContentLoaded", function() {
    const savedBalance = localStorage.getItem('balance');
    if (savedBalance !== null) {
        document.getElementById('balance').textContent = parseFloat(savedBalance).toFixed(2) + ' EUR';
    }
});

function submitForm() {
    const increaseAmount = parseFloat(document.getElementById('increase').value) || 0;
    const decreaseAmount = parseFloat(document.getElementById('decrease').value) || 0;
    let currentBalance = parseFloat(localStorage.getItem('balance')) || 0;

    currentBalance += increaseAmount - decreaseAmount;

    // Save the new balance to local storage
    localStorage.setItem('balance', currentBalance);

    // Reload the page to display the updated balance
    location.reload();
}
