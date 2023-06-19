const pre = document.querySelector("pre");

document.addEventListener("mousemove", (e) => {
    rotateElement(e, pre);
})

function rotateElement(event, element){
    // get mouse position
    const x = event.clientX;
    const y = event.clientY;
    // console.log(x, y);

    // find the middle of the page
    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    // offset from the middle (meaning how far away is our mouse from the middle)
    const offsetX = ((x - middleX) / middleX) * 45; // 45%
    const offsetY = ((y - middleY) / middleY) * 45; // 45%
    // console.log(offsetX, offsetY);

    element.style.setProperty("--rotateX", -1 * offsetY + "deg"); // -1 to manage Y axis
    element.style.setProperty("--rotateY", offsetX + "deg");
}