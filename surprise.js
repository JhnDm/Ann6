document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("open-btn").addEventListener("click", showLetter);
});

function showLetter() {
    const letterText = `
        My Love,

        Happy Anniversary! 💖
        
        From the moment we met, you've been the light of my life.
        Every day with you is a beautiful adventure, and I cherish 
        every second we spend together.

        No matter how far apart we are, my love for you remains stronger 
        than ever. You're my home, my heart, my everything. 💕

        Forever yours,
        [Your Name]
    `;

    const letter = document.getElementById("letter");
    letter.classList.remove("hidden");
    letter.style.display = "block";

    let i = 0;
    letter.innerHTML = ""; 

    function typeWriter() {
        if (i < letterText.length) {
            letter.innerHTML += letterText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        } else {
            letter.style.opacity = 1;
        }
    }

    typeWriter();
}
