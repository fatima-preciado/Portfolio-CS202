var astronautsData;
var astronautsPositions = [];
var baseSize = 8;
var sun = 10 * baseSize;
var mercury = baseSize;
var venus = 1.8 * baseSize;
var earth = 2.0 * baseSize;
var mars = 1.3 * baseSize;
var jupiter = 6 * baseSize;
var saturn = 5 * baseSize;
var uranus = 3 * baseSize;
var neptune = 2.9 * baseSize;
var baseOrbit = 120;
var merOrbit = (0.9 * baseOrbit) / 2;
var venOrbit = (1.2 * baseOrbit) / 2;
var earOrbit = (1.55 * baseOrbit) / 2;
var marOrbit = (1.9 * baseOrbit) / 2;
var jupOrbit = (2.7 * baseOrbit) / 2;
var satOrbit = (3.7 * baseOrbit) / 2;
var uraOrbit = (4.6 * baseOrbit) / 2;
var nepOrbit = (5.3 * baseOrbit) / 2;
var orbitSpeed;
var orbitDuration = 30;
var ang;
var x;
var y;

function setup() {
    createCanvas(windowWidth, windowHeight);
    loadJSON("http://api.open-notify.org/astros.json", gotAstronautsData);

    sunn = loadImage("./images/sun.png");
    mer = loadImage("./images/mercury.png");
    ven = loadImage("./images/venus.png");
    ear = loadImage("./images/earth.png");
    mar = loadImage("./images/mars.png");
    jup = loadImage("./images/jupitor.png");
    sat = loadImage("./images/saturn.png");
    ura = loadImage("./images/uranus.png");
    nep = loadImage("./images/neptune.png");
}

function draw() {
    clear();
    push();
    translate(width / 2 + 300, height / 2 + 10); // Shift to the right of the canvas
    calcSpeed();
    image(sunn, -39, -39, sun, sun);

    // Draw astronauts
    if (astronautsData && astronautsData.people) {
        drawAstronauts();
        var astroNum = astronautsData.number;
        let textY = -150;
        stroke("#B7B7BC");
        fill("#B7B7BC");
        textFont('Courier New');
        textSize(50);
        text("There are currently \n" + astroNum + " people in space", -690, textY);

        
    }

    drawPlanet(merOrbit, 88, mercury, 1, mer);
    drawPlanet(venOrbit, 225, venus, 2, ven);
    drawPlanet(earOrbit, 365, earth, 3, ear);
    drawPlanet(marOrbit, 687, mars, 4, mar);
    drawPlanet(jupOrbit, 12 * 365, jupiter, 5, jup);
    drawPlanet(satOrbit, 29 * 365, saturn, 6, sat);
    drawPlanet(uraOrbit, 84 * 365, uranus, 7, ura);
    drawPlanet(nepOrbit, 165 * 365, neptune, 8, nep);
    pop();
}


function gotAstronautsData(data) {
    astronautsData = data;
}

function drawAstronauts() {
    for (let i = 0; i < astronautsData.people.length; i++) {
        let astro = astronautsData.people[i];
        let angle = map(i, 0, astronautsData.people.length, 0, TWO_PI);
        let distance = map(i, 0, astronautsData.people.length, earOrbit * 0.8, nepOrbit);
        let xPos = cos(angle) * distance;
        let yPos = sin(angle) * distance;
        fill(255);
        ellipse(xPos, yPos, 10, 10);
        fill(255);
        textAlign(CENTER, CENTER);
        textFont('Courier New');
        textStyle(BOLDITALIC);
        text("\n" + astro.name + "\n" + astro.craft, xPos, yPos + 15);
    }
}

function calcSpeed() {
    orbitSpeed = millis();
}

function drawPlanet(orbit, days, planet, c, planetImage) {
    stroke("gray");
    strokeWeight(1);
    noFill();
    ellipse(0, 0, orbit * 2, orbit * 2);

    ang = (TWO_PI * orbitSpeed) / (days * orbitDuration);
    x = cos(ang) * orbit;
    y = sin(ang) * orbit;
    stroke("gray");
    strokeWeight(1);

    image(planetImage, x - planet / 2, y - planet / 2, planet, planet);
}
