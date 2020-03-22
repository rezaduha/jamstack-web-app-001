// Bank some good vibe option
const vibes = [
    "...Have a nice day! 😇",
    "...Have a wonderful day! 😃",
    "...Happy reading! 📰",
    "...Nice to meet you! 🐶",
];

// choose a random good vibe
var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

//display a good vibe
document.querySelector(".vibe").append(vibe);