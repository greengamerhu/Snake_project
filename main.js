

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener('keydown', function (event) {
        const {code} = event
        if (code === "KeyW") {
            console.log("W pressed")
        } else if (code === "ArrowUp") {
            console.log("ArrowUp pressed")
        }
})
});