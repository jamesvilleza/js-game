const piano = [
    "C",
    "C-sharp",
    "D",
    "D-sharp",
    "E",
    "F",
    "F-sharp",
    "G",
    "G-sharp",
    "A",
    "A-sharp",
    "B",
    "C5",
];

piano.forEach((piano) => {
    let buttons = document.querySelectorAll(".btn");
    buttons.forEach((button) => button.addEventListener("click", handleClick));
});
function handleClick(e) {
    let playNote = document.getElementById(e.target.dataset.note);
    playNote.play();
    piano.stopPropagation();
}
