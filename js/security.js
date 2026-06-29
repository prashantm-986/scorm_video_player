// Disable Right Click
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

// Disable Dragging
document.addEventListener("dragstart", function (e) {
    e.preventDefault();
});

// Disable Text Selection
document.addEventListener("selectstart", function (e) {
    e.preventDefault();
});