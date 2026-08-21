/* =========================================================
   FLOATING HEARTS
========================================================= */

const heartsContainer =
    document.querySelector(".hearts-container");


function createHeart() {

    if (!heartsContainer) {
        return;
    }

    const heart =
        document.createElement("div");

    heart.classList.add("floating-heart");


    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💓",
        "💞"
    ];


    heart.innerHTML =
        hearts[
            Math.floor(
                Math.random() * hearts.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        (15 + Math.random() * 20) + "px";


    heart.style.animationDuration =
        (5 + Math.random() * 4) + "s";


    heartsContainer.appendChild(heart);


    setTimeout(() => {
        heart.remove();
    }, 9000);
}


setInterval(createHeart, 700);


/* =========================================================
   BIRTHDAY MUSIC
========================================================= */

const birthdayMusic =
    document.getElementById("birthdayMusic");

const musicButton =
    document.getElementById("musicButton");


if (birthdayMusic && musicButton) {

    /* Make sure the browser knows the audio is ready */

    birthdayMusic.load();


    musicButton.addEventListener(
        "click",
        async () => {

            try {

                if (birthdayMusic.paused) {

                    await birthdayMusic.play();

                    musicButton.innerHTML =
                        "🎵 Music Playing ❤️";

                    musicButton.classList.add(
                        "music-playing"
                    );

                } else {

                    birthdayMusic.pause();

                    musicButton.innerHTML =
                        "🔇 Music Paused";

                    musicButton.classList.remove(
                        "music-playing"
                    );

                }

            } catch (error) {

                console.error(
                    "Music error:",
                    error
                );

                musicButton.innerHTML =
                    "⚠️ Music Could Not Play";

                musicButton.classList.remove(
                    "music-playing"
                );

            }

        }
    );


    /* If the audio is paused externally */

    birthdayMusic.addEventListener(
        "pause",
        () => {

            if (!birthdayMusic.ended) {

                musicButton.innerHTML =
                    "🔇 Music Paused";

                musicButton.classList.remove(
                    "music-playing"
                );

            }

        }
    );


    /* When music starts */

    birthdayMusic.addEventListener(
        "play",
        () => {

            musicButton.innerHTML =
                "🎵 Music Playing ❤️";

            musicButton.classList.add(
                "music-playing"
            );

        }
    );


    /* When music finishes */

    birthdayMusic.addEventListener(
        "ended",
        () => {

            musicButton.innerHTML =
                "🎵 Tap to Play Music ❤️";

            musicButton.classList.remove(
                "music-playing"
            );

        }
    );

}