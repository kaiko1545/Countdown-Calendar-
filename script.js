document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('countdown');
    const contentElement = document.getElementById('daily-content');

    // Function to calculate the remaining days
    function getRemainingDays(targetDate) {
        const now = new Date();
        const timeDifference = targetDate - now;
        const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        return daysRemaining;
    }

    // Function to update the countdown
    function updateCountdown() {
        const targetDate = new Date('June 11, 2024');
        const daysRemaining = getRemainingDays(targetDate);
        countdownElement.textContent = `${daysRemaining} days remaining`;
    }

    // Daily content array
    const dailyContent = [
        "Day 1: A heartfelt message or love letter.",
        "Day 2: A favorite shared memory or photo.",
        "Day 3: A song of the day with a reason why it’s special.",
        "Day 4: A short poem or quote about love.",
        "Day 5: A fun fact about you or something they might not know.",
        // Add more content as needed
    ];

    // Function to update the daily content
    function updateDailyContent() {
        const startDate = new Date('May 18, 2024');
        const now = new Date();
        const dayNumber = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
        
        if (dayNumber >= 0 && dayNumber < dailyContent.length) {
            contentElement.textContent = dailyContent[dayNumber];
        } else {
            contentElement.textContent = "Stay tuned for more!";
        }
    }

    // Initial updates
    updateCountdown();
    updateDailyContent();

    // Update the countdown every day
    setInterval(updateCountdown, 1000 * 60 * 60 * 24); // Every day
});
