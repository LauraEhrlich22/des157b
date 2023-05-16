// const cameraEntity = document.querySelector('#camera');
// cameraEntity.remove()
const  t= document.querySelector(".trails");
const a = document.querySelector(".after-images")
const mainpage = document.querySelector("div");
const body = document.querySelector("body");
const aframe = document.querySelector(".aframe");

a.addEventListener("click", function(){
    window.open("AR3/index.html")
    // body.innerHTML = "<a-scene vr-mode-ui='enabled: false;'loading-screen='enabled: false;'arjs='trackingMethod: best; sourceType: webcam; debugUIEnabled: false;'id='scene'embedded gesture-detector><a-marker id='animated-marker' type='pattern' preset='custom' url='assets/marker.patt' raycaster='objects: .clickable' emitevents='true' cursor='fuse: false; rayOrigin: mouse;' id='markerA'><a-image src='assets/asset.png' scale='1 1 1' class='clickable' rotation='-90 0 0' gesture-handler></a-image></a-marker><a-entity camera id='camera'></a-entity></a-scene>"
    mainpage.remove();
})

t.addEventListener("click", function(){
    // body.innerHTML = "<script src='sketch.js'></script>"
    mainpage.remove()
    // body.innerHTML += "<button>back</button>"
    // body.innerHTML += "<h1>Move the mouse to simulate what a trail looks like. Trails appear often for me when driving by a lamp post and a get a trail of light similar to this.</h1>"
})
