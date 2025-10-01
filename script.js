const stimmungsSelector = document.getElementById("Auswählen");
const textfeld = document.getElementById("exampleFormControlTextarea1");
const button = document.querySelector(".btn-primary");
const memeOutput = document.getElementById("meme-output");

const bilder = {
    "1": "images/Witzig.jpg",
    "2": "images/Genervt.jpg",
    "3": "images/Verärgert.jpg"
};

button.addEventListener("click", () => {
    const stimmung = stimmungsSelector.value;
    const text = textfeld.value.trim();

     if (stimmung === "Stimmung auswählen" || !bilder[stimmung]) {
        alert("Bitte eine Stimmung auswählen.");
        return;
    }

     if (text === "") {
        alert("Bitte gib einen Text ein.");
        return;
    }

    const bildUrl = bilder[stimmung];

     memeOutput.innerHTML = `
        <div class="meme-container">
            <img src="${bildUrl}" alt="Meme-Bild" class="meme-image">
            <p class="meme-text">${text}</p>
        </div>
    `;
});