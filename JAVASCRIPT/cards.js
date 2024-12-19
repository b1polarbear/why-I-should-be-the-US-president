// Select all cards
const cards = document.querySelectorAll('.card');

// Add click event listener to each card
cards.forEach(card => {
    card.addEventListener('click', () => {
        // Check if the clicked card is already expanded
        if (card.classList.contains('expanded')) {
            // If it's expanded, remove the 'expanded' class to collapse it
            card.classList.remove('expanded');
        } else {
            // If it's not expanded, collapse all other cards first
            cards.forEach(c => c.classList.remove('expanded'));
            // Then expand the clicked card
            card.classList.add('expanded');
        }
    });
});
