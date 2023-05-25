const menu = document.querySelector(".menu")
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

  var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}