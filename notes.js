// notes.js
document.addEventListener("DOMContentLoaded", function () {
    const newSetButton = document.getElementById("newSetButton");
    const flashcardContainer = document.getElementById("flashcardContainer");

    newSetButton.addEventListener("click", function () {
        createFlashcard();
    });

    function createFlashcard() {
        const flashcard = document.createElement("div");
        flashcard.classList.add("flashcard");

        const front = document.createElement("div");
        front.classList.add("front");
        front.textContent = "Front Text"; // Customize this with user input

        const back = document.createElement("div");
        back.classList.add("back");
        back.textContent = "Back Text"; // Customize this with user input

        flashcard.appendChild(front);
        flashcard.appendChild(back);

        flashcardContainer.appendChild(flashcard);
    }
});
