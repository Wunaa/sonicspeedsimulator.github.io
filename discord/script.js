function openPopup(popupId) {
    document.getElementById(popupId).style.display = 'block';
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

function shareAwareness() {
    const shareData = {
        title: 'Discord Scam Awareness',
        text: 'Learn how to stay safe from Discord scams. Visit our website for detailed information.',
        url: window.location.href
    };

    if (navigator.share) {
        navigator.share(shareData).catch(console.error);
    } else {
        alert("Sharing is not supported on this browser.");
    }
}
