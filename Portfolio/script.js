// Add click event listeners to key skills cards
document.addEventListener('DOMContentLoaded', function() {
    const skillCards = document.querySelectorAll('.highlight-card');
    
    skillCards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function() {
            // Smooth scroll to skills section
            document.getElementById('skills').scrollIntoView({
                behavior: 'smooth'
            });
            
            // Add visual feedback
            this.style.transform = 'scale(0.98)';
            this.style.transition = 'transform 0.2s ease';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
});
