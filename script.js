let feedbackButtons = document.querySelectorAll('.feedbackButton'),
    submitButton = document.getElementById('submitButton'),
    mainBlock = document.getElementById('mainBlock'),
    selectedFeedback = document.getElementById('selectedFeedback'),
    hideBlock = document.getElementById('hideBlock');
    
feedbackButtons.forEach(button => {
    button.addEventListener('click', function() {
        feedbackButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        let feedbackValue = this.innerHTML;
        selectedFeedback.innerHTML = `${feedbackValue}`
    })
});

submitButton.addEventListener('click', function() {
    mainBlock.style.display = 'none';
    hideBlock.style.display = 'flex';
})