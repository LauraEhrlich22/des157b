console.log("here");
async function getData(){
    console.log("here");
    const steps = await fetch('steps.json');
    const data = await steps.json();
    const p1 = document.querySelector("#p1")
    const p2 = document.querySelector("#p2");
    const p3 = document.querySelector("#p3");
    const p4 = document.querySelector("#p4");
    const p5 = document.querySelector("#p5");
    const p6 = document.querySelector("#p6");
    const p7 = document.querySelector("#p7");
    const p8 = document.querySelector("#p8");
    const p9 = document.querySelector("#p9");
    const p10 = document.querySelector("#p10");
    const p11 = document.querySelector("#p11");
    const p12 = document.querySelector("#p12");
    const p13 = document.querySelector("#p13");
    const p14 = document.querySelector("#p14");
    const p15 = document.querySelector("#p15");
    const p16 = document.querySelector("#p16");


    p1.addEventListener("mouseover", function(){
        const point = data.point1.image
        const steps = data.point1.steps
        changeBackground(data, point,steps);
    })

    p2.addEventListener("mouseover", function(){
        const point = data.point2.image
        const steps = data.point2.steps
        changeBackground(data, point,steps);
    })

    p3.addEventListener("mouseover", function(){
        const point = data.point3.image
        const steps = data.point2.steps
        changeBackground(data, point,steps);
    })

    p4.addEventListener("mouseover", function(){
        const point = data.point4.image
        const steps = data.point4.steps
        changeBackground(data, point,steps);
    })

    p5.addEventListener("mouseover", function(){
        const point = data.point5.image
        const steps = data.point5.steps
        changeBackground(data, point,steps);
    })

    p6.addEventListener("mouseover", function(){
        const point = data.point6.image
        const steps = data.point6.steps
        changeBackground(data, point,steps);
    })

    p7.addEventListener("mouseover", function(){
        const point = data.point7.image
        const steps = data.point7.steps
        changeBackground(data, point,steps);
    })

    p8.addEventListener("mouseover", function(){
        const point = data.point8.image
        const steps = data.point8.steps
        changeBackground(data, point,steps);
    })

    p9.addEventListener("mouseover", function(){
        const point = data.point9.image
        const steps = data.point9.steps
        changeBackground(data, point,steps);
    })
    p10.addEventListener("mouseover", function(){
        const point = data.point10.image
        const steps = data.point10.steps
        changeBackground(data, point,steps);
    })
    p11.addEventListener("mouseover", function(){
        const point = data.point11.image
        const steps = data.point11.steps
        changeBackground(data, point,steps);
    })
    p12.addEventListener("mouseover", function(){
        const point = data.point12.image
        const steps = data.point12.steps
        changeBackground(data, point,steps);
    })
    p13.addEventListener("mouseover", function(){
        const point = data.point13.image
        const steps = data.point13.steps
        changeBackground(data, point,steps);
    })
    p14.addEventListener("mouseover", function(){
        const point = data.point14.image
        const steps = data.point14.steps
        changeBackground(data, point,steps);

    })
    p15.addEventListener("mouseover", function(){
        const point = data.point15.image
        const steps = data.point15.steps
        changeBackground(data, point,steps);
    })
    p16.addEventListener("mouseover", function(){
        const point = data.point16.image
        const steps = data.point16.steps
        changeBackground(data, point,steps);
    })
}

function changeBackground(data, point,steps){
    console.log(`${point}`)
    const body = document.querySelector("body");
    const img = document.querySelector("img")
    const h3 = document.querySelector("h3")
    img.remove();
    h3.remove();
    body.innerHTML += `<img class="image" src=${point}>`;
    body.innerHTML += `<h3>steps: ${steps}</h3>`;
    getData();
}

getData();