
const menu = document.querySelector(".menu")
let h = "a";
const c = document.querySelector(".c");
// const isIphone = /iPhone|iPad|iPod/.test(navigator.userAgent);

menu.addEventListener("click", function() {
    var x = document.getElementById("myLinks");
    var topnav = document.querySelector(".topnav")
    if (x.style.display === "block") {
      x.style.display = "none";
      topnav.style.filter = "none"
      topnav.style.height = "10vh";
    } else {
      x.style.display = "block";
      topnav.style.width = "60vw";
      topnav.style.height = "30vh"
    //   topnav.style.backgroundColor = "grey";
      topnav.style.borderRadius = "20px";
      topnav.style.filter = "drop-shadow(10px 10px 20px rgba(53, 53, 53, 0.315))";
      topnav.style.zIndex = "100";
      

    //   width:60vw;
    //   height:40vh;
    //   z-index: 0;
    //   filter: 
      
    }
  })


  const video = document.querySelector("#container video");

  async function getMedia(constraints) {
      let stream = null;

      try {
          stream = await navigator.mediaDevices.getUserMedia(constraints);
          //see function defined below...
          displayVideo(stream)
      } catch (err) {
          console.log('this went wrong:' + err);
      }
  }

  
  function displayVideo(stream) {
      video.srcObject = stream;
      /* this waits until the metadata has loaded
      before it tries to start playing the video. Not
      100% sure this matters, but it might */
      video.onloadedmetadata = function(event) {
          video.play();
      }
  }

  getMedia({ video: { facingMode: 'environment' } });
  // getMedia({ video: true });

  var x = document.getElementById("demo");



var plus = document.querySelector(".svg");
// plus.style.backgroundColor = "blue";
var note = document.querySelector(".note");
// var form = document.querySelector("input");

function setCursorToTopLeft(inputelem) {
  inputelem.setSelectionRange(0, 0);
}
const input = document.querySelector('input');
setCursorToTopLeft(input);


plus.addEventListener("click", function(){
  note.classList.remove("hide");
  // console.log("here")
})

var notebutton = document.querySelector(".n1")
var form = document.querySelector("form");
var real_note = document.querySelector(".sample-note")
notebutton.addEventListener("click", function(){
    form.classList.remove("hide")
    note.classList.add("hide");
    real_note.classList.add("hide");
})




  


