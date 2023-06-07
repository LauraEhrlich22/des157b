// alert("Hello! Thank you for testing my project. Please complete the following tasks: 1.pretend like you are already at a location on the bikeloop and add a note there for someone 2.Find the history page for the arboreturm. 3.Find the reviews for the walker hall location Note: the response will not actually be added as that feature is still under construction. The Review button is also still under construction and text is still to be added to the history pages. The history button in the menu is also non-functional at the moment, but will eventually lead to an overview of the history of the bikeloop as a whole.")
const menu = document.querySelector(".menu")
let h = "a";
const c = document.querySelector(".c");
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
      topnav.style.color="blue"
      

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

function map(){
  var map = L.map('map').setView([38.542340, -121.752010], 12.5);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  var arb = L.marker([38.5403174, -121.7416662]).addTo(map); //arboretum entrance
      arb.addEventListener("click", function(){
          arb.bindPopup("<b>The Arboretum</b><br><img class='pop-img' src='uc_davis_arboretum.jpg'><br><a href='arb_history.html' class='history'>Learn More</a>").openPopup();
        })
  var shields = L.marker([38.540098, -121.7499461]).addTo(map); //shields
      shields.addEventListener("click", function(){
          h = "shields";
          shields.bindPopup("<b>Shields Library</b><br><img class='pop-img' src='shields_library.jpg'><br><a href='shields_history.html' class='history'>Learn More</a>").openPopup();
      })
  var walker = L.marker([38.5393138, -121.7500236]).addTo(map); //walker+ grad center
      walker.addEventListener("click", function(){
          h = "walker";
          walker.bindPopup("<b>Walker Hall</b><br><img class='pop-img' src='UC-Davis-Walker-Hall-Slideshow-2.jpg'><br><a href='walker_history.html' class='history'>Learn More</a>").openPopup();
      })
  // var wright = L.marker([38.5394132, -121.7480310]).addTo(map); //olson  + wright
  // var marker = L.marker([38.5378959, -121.7202702]).addTo(map);//west park
  var village_homes = L.marker([38.54944, -121.78278]).addTo(map); //Village Homes Park
      village_homes.addEventListener("click", function(){
          h = "villages";
          village_homes.bindPopup("<b>Village Homes Park</b><br><img class='pop-img' src='village_homes.jpg'><br><a href='village_history.html' class='history'>Learn More</a>").openPopup();
      })
  var arroyo_park = L.marker([38.55389, -121.77361]).addTo(map); //arroyo park
  arroyo_park.addEventListener("click", function(){
      h = "arroyo park";
      arroyo_park.bindPopup("<b>Arroyo Park</b><br><img class='pop-img' src='arroyo_park.jpg'><br><a href='arroyo_history.html' style: color='black' class='history'>Learn More</a>").openPopup();
      })
  var sycamore_park = L.marker([38.55583, -121.76639]).addTo(map); //sycamore park
      sycamore_park.addEventListener("click", function(){
          h = "sycamore park";
          sycamore_park.bindPopup("<b>Sycamore Park</b><br><img class='pop-img' src='sycamore_park.jpg'><br><a href='sycamore_history.html' class='history'>Learn More</a>").openPopup();
      })
    }

    console.log(map())
  
    
// let history = document.querySelector(".history");
// history.addEventListener("click", function(){
//     menu.style.backgroundColor = "black";
// })

var plus = document.querySelector(".svg");
// plus.style.backgroundColor = "blue";
var note = document.querySelector(".note")
plus.addEventListener("click", function(){
  note.classList.remove("hide");
  console.log("here")
})
