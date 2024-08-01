document.addEventListener('DOMContentLoaded', () => {
    const twitterButton = document.getElementById('twitter-share-button');
    if (twitterButton) {
        twitterButton.addEventListener('click', () => {
            alert('Thank you for spreading the word! Every share helps in the fight for fair treatment.');
        });
    }
});
