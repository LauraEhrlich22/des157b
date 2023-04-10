(function() {
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const banner = document.querySelector('#banner');
    const h1 = document.querySelector("h1");
    const h2 = document.querySelector("h2");
    const h3s = document.querySelectorAll('h3')
    const sections = document.querySelectorAll('section');
    let fish = document.querySelector("img");
    let mode = 'dark';

    button.addEventListener('click', function() {
        if (mode === 'dark') {
            console.log("here");
            body.className = 'switch';
            banner.className = 'switch';
            button.className = 'switch';
            h1.className = 'switch';
            h2.className = 'switch';
            fish.innerHTML = '<img id="fish" src="blue-fish.png">'
            fish = document.querySelector("img");
            fish.remove();
            banner.innerHTML += '<img id="fish" src="orange-fish.png">'
            fish = document.querySelector("img");
            // blue.classList.add('hide');
            for (const section of sections) {
                section.className = 'switch';
            }
            for(const h3 of h3s){
                h3.className = 'switch';
            }
            mode = 'light';
        } else {
            console.log("here");
            fish.remove();
            banner.innerHTML += '<img id="fish" src="blue-fish.png">'
            fish.remove();
            body.removeAttribute('class');
            banner.removeAttribute('class');
            button.removeAttribute('class');
            h1.removeAttribute('class');
            h2.removeAttribute('class');
            // blue.className = 'show';
            for (const section of sections) {
                section.removeAttribute('class');
            }
            for(const h3 of h3s){
                h3.removeAttribute('class');
            }
            mode = 'dark'
        }
    })
})()