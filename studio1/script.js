(function() {
    'use strict';
    const body = document.querySelector("#video");
    const overlay = document.querySelector("#overlay");
    let x;
    let y;
    document.addEventListener("mousemove", function (e) {
            x = e.offsetX;
            y = e.offsetY;
            console.log(x)
            overlay.style.backgroundColor = `rgb(${x}, ${y}, ${x - y})`;
        });
})();