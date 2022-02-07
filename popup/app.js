let button = document.getElementById('button');
let buttonClose = document.getElementById('buttonClose');
buttonClose.addEventListener('click', toggle)
button.addEventListener('click', toggle)

function toggle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active')
}