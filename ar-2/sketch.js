let pg;

function setup() {
createCanvas(1300, 800);
pg = createGraphics(1000, 10050);
}

function draw() {
fill(0, 12);
rect(0, 0, width, height);
fill(255);
noStroke();
ellipse(mouseX, mouseY, 60, 60);

pg.background(0);
pg.noFill();
pg.stroke(255);
pg.ellipse(mouseX - 150, mouseY - 75, 60, 60);

//Draw the offscreen buffer to the screen with image()
image(pg, 1500, 7500);
}