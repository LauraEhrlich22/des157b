(function() {
    'use strict';
    const body = document.querySelector("#video");
    const overlay = document.querySelector("#overlay");
    let x;
    let y;
    let t1;
    let t2;
    let t3;
    let t4;
    let wait = 0;
    var section = document.querySelector("#text");
    var button = document.querySelector("button");
    var text = [`<h1 id="t1">Home</h1>`, `<h2 id="t2">is where I want to be</h2>`, `<h3 id="t3">but I guess</h3>`, `<h1 id="t4">I'm already there.</h1>`];
    document.addEventListener("mousemove", function (e) {
            x = e.offsetX;
            y = e.offsetY;
            console.log(x)
                overlay.style.backgroundColor = `rgb(${x}, ${y}, ${x - y})`;
        });
    function displayText(){
            // t1.classList.add("fade");
            section.innerHTML += `<h1 id="t1" class="fade">Home</h1>`;
            section.innerHTML += `<h2 id="t2" class="hidden">is where I want to be</h2>`
            section.innerHTML += `<h3 id="t3" class="hidden">but I guess</h3>`
            section.innerHTML += `<h1 id="t4" class="hidden">I'm already there.</h1>`

   
            setTimeout(() => {
                t1 = document.querySelector("#t1");
                t2 = document.querySelector("#t2");
                t3 = document.querySelector("#t3");
                t4 = document.querySelector("#t4");
              }, 1000);
              setTimeout(() => {
                console.log("this is the second message");
                t1.className = "fade-out"
                t1.classList.add("hidden");
              }, 3000);
              setTimeout(() => {
                t2.classList.add("fade");
                t2.classList.remove("hidden");
                // t2.classList.remove("fade")    
                console.log("this is the third message");
              }, 5000);
              setTimeout(() => {
                t2.className = "fade-out"
                t2.classList.add("hidden");
                t3.classList.add("fade");
                t3.classList.remove("hidden");
                console.log("this is the third message");
              }, 9000);
              setTimeout(() => {
                t3.classList.add("fade-out");
                t3.classList.add("hidden");
                t4.classList.remove("hidden");
                t4.classList.add("fade");
                console.log("this is the third message");
                wait = 1;
              }, 13000);
           
    }
    button.addEventListener("click", function(){
        clearTimeout();
        console.log("yup: ", displayText());
        t4.classList.add("fade-out");
        t4.classList.add("hidden");
    })

    window.addEventListener('load', function () {
		const posts = document.querySelectorAll('section');
		let postTops = [];
		let pageTop;
		let counter = 1;
		let prevCounter = 1;
		let doneResizing;
		let exitDirection;
		let enterDirection;

		/* This version adds a preloader screen that shows until all
		the assets for the page have downloaded, including the large
		image. This preloader is a div that covers the entire screen 
		on the HTML file.
		
		The code below removes this div by fading it out, then once
		it has faded out, sets it to display none. */

		const preloader = document.getElementById('preloader');
		preloader.className = 'fadeout';

		// wait until the animation has completed
		preloader.addEventListener('animationend', function () {

			//once the animation is done, remove the preloader div.
			preloader.style.display = 'none';
            preloader.remove();

		});
        console.log("text: ", displayText());
        if(wait == 1){
            setTimeout(() => {
              button.classList.remove("hidden");
              button.classList.add("fade");
              // wait = 0;
            },100);
          }
    })

    // document.addEventListener('DOMContentLoaded', function(){
    //     console.log("text: ", displayText());
    //     if(wait == 1){
    //         setTimeout(() => {
    //           button.classList.remove("hidden");
    //           button.classList.add("fade");
    //           // wait = 0;
    //         },100);
    //       }
    // })
   
    
    // clearTimeout();
})();