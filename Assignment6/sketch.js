let paused = false;
let startPause = 0;
let endPause = 0;
let curPlanet = [0, 0, 0];
let baseSize = 8;
let sun = 10 * baseSize;
let mercury = baseSize;
let venus = 1.8 * baseSize;
let earth = 2.0 * baseSize;
let mars = 1.3 * baseSize;
let jupiter = 6 * baseSize;
let saturn = 5 * baseSize;
let uranus = 3 * baseSize;
let neptune = 2.9 * baseSize;
let baseOrbit = 120;
let merOrbit = (0.9 * baseOrbit) / 2;
let venOrbit = (1.2 * baseOrbit) / 2;
let earOrbit = (1.55 * baseOrbit) / 2;
let marOrbit = (1.9 * baseOrbit) / 2;
let jupOrbit = (2.7 * baseOrbit) / 2;
let satOrbit = (3.7 * baseOrbit) / 2;
let uraOrbit = (4.6 * baseOrbit) / 2;
let nepOrbit = (5.3 * baseOrbit) / 2;
let orbitSpeed;
let orbitDuration = 30;
let ang;
let x;
let y;
let earthCanvas; // New canvas variable for Earth's orbit
let astronautImages = []

function setup() {
    createCanvas(windowWidth, windowHeight);
    loadJSON("https://raw.githubusercontent.com/unnamedActant/Example_JSON/main/astros.json", gotAstronautsData);

    sunn = loadImage("./images/sun.png");
    mer = loadImage("./images/mercury.png");
    ven = loadImage("./images/venus.png");
    ear = loadImage("./images/earth.png");
    mar = loadImage("./images/mars.png");
    jup = loadImage("./images/jupitor.png");
    sat = loadImage("./images/saturn.png");
    ura = loadImage("./images/uranus.png");
    nep = loadImage("./images/neptune.png");

    iss = loadImage("./images/iss.svg");
    moon = loadImage("./images/moon_michikake01.png");
    car = loadImage("./images/car1_white.png");
    apollo = loadImage("./images/space_apollo11.png");
    satelite = loadImage("./images/space_jinkoueisei.png");
    alien = loadImage("./images/alien_ufo (1).png");
    black_hole = loadImage("./images/space_blackhole2 (1).png");
    spunk = loadImage("./images/space_sputnik_1gou (1).png");

    dog = loadImage("./images/astronaut1.png")
    bear = loadImage("./images/astronaut2.png")
    astronautImages.push(bear)
    astronautImages.push(dog)

    earthCanvas = createGraphics(windowWidth, windowHeight);
}

function draw() {
    clear();
    push();
    translate(width / 2, height / 2);
    calcSpeed();

    stroke("#B7B7BC");
    fill("#B7B7BC");
    textFont('Courier New');
    textSize(50);
    text("what is orbiting earth?", -350, -350);


    image(sunn, -39, -39, sun, sun);

    if (touchPlanet(0, 0, sun)) {
        pauseOrbit();
    }

    drawPlanet(merOrbit, 88, mercury, 1, mer);
    drawPlanet(venOrbit, 225, venus, 2, ven);
    drawPlanet(earOrbit, 365, earth, 3, ear);
    drawPlanet(marOrbit, 687, mars, 4, mar);
    drawPlanet(jupOrbit, 12 * 365, jupiter, 5, jup);
    drawPlanet(satOrbit, 29 * 365, saturn, 6, sat);
    drawPlanet(uraOrbit, 84 * 365, uranus, 7, ura);
    drawPlanet(nepOrbit, 165 * 365, neptune, 8, nep);
    isTouching();
    pop();

    // call drawEarthCanvas function to draw on earthCanvas
    if (curPlanet[2] === earth) {
        drawEarthCanvas();
    }
}

function gotAstronautsData(data) {
    astronautsData = data;
}

function calcSpeed() {
    if (paused) {
        orbitSpeed = orbitSpeed;
    }
    if (!paused) {
        orbitSpeed = millis() - endPause;
    }
}

function touchPlanet(x, y, planet) {
    if (dist(mouseX - width / 2, mouseY - height / 2, x, y) < planet / 2) {
        curPlanet[0] = x;
        curPlanet[1] = y;
        curPlanet[2] = planet;
        return true;
    }
    return false;
}

function isTouching() {
    if (!touchPlanet(curPlanet[0], curPlanet[1], curPlanet[2])) {
        resumeOrbit();
    }
}

function pauseOrbit() {
    if (!paused) {
        startPause = millis();
    }
    paused = true;
}

function resumeOrbit() {
    if (paused) {
        endPause = endPause + (millis() - startPause);
    }
    paused = false;
}

function drawPlanet(orbit, days, planet, c, planetImage) {
    // draw the orbital ring
    stroke("grey");
    strokeWeight(1);
    noFill();
    ellipse(0, 0, orbit * 2, orbit * 2);

    ang = (TWO_PI * orbitSpeed) / (days * orbitDuration);
    x = cos(ang) * orbit;
    y = sin(ang) * orbit;
    stroke("grey");
    strokeWeight(1);

    if (touchPlanet(x, y, planet)) {
        image(planetImage, x - planet / 2, y - planet / 2, planet, planet);
        pauseOrbit();
    } else {
        image(planetImage, x - planet / 2, y - planet / 2, planet, planet);
    }
}

function drawEarthCanvas() {
    if (earthCanvas) {
        clear();
        push();
        translate(width / 2 + 300, height / 2);
        calcSpeed();
        image(ear, -39, -39, sun, sun);

        if (astronautsData && astronautsData.people) {
            var astroNum = astronautsData.number;
            stroke("#B7B7BC");
            fill("#B7B7BC");
            textFont('Courier New');
            textSize(50);
            text("There are currently \n" + astroNum + " people in space", -910, -350);

            // calculate the number of columns based on the number of astronauts
            let cols = Math.min(2, astroNum);

            // calculate the spacing between astronauts
            let spacingX = 300;
            let spacingY = 150;

            for (let i = 0; i < astroNum; i++) {
                let astronaut = astronautsData.people[i];
                let astronautName = astronaut.name;
                let astronautIndex = i % astronautImages.length; 
                let astronautImg = astronautImages[astronautIndex];

                // calculate the position of the current astronaut
                let col = i % cols;
                let row = Math.floor(i / cols);
                let startX = col * spacingX - 830;
                let startY = row * spacingY - 250;

                image(astronautImg, startX, startY, 100, 100); 
                fill("#B7B7BC");
                textAlign(CENTER, TOP);
                textSize(20);
                text(astronautName, startX + 50, startY + 100);
            }
        }

        drawPlanet(merOrbit, 365, uranus, 1, car);
        drawOrbitingObjectName(merOrbit, 365, uranus, "elon musk's car");

        drawPlanet(venOrbit, 225, uranus, 2, spunk);
        drawOrbitingObjectName(venOrbit, 225, uranus, "sputnik 1");

        drawPlanet(earOrbit, 365, earth, 3, alien);
        drawOrbitingObjectName(earOrbit, 365, earth, "alien");

        drawPlanet(marOrbit, 687, jupiter, 4, satelite);
        drawOrbitingObjectName(marOrbit, 687, jupiter, "satellite");

        drawPlanet(jupOrbit, 2 * 365, jupiter, 5, iss);
        drawOrbitingObjectName(jupOrbit, 2 * 365, jupiter, "ISS");

        drawPlanet(satOrbit, 2.5 * 365, jupiter, 6, apollo);
        drawOrbitingObjectName(satOrbit, 2.5 * 365, jupiter, "apollo 11");

        drawPlanet(uraOrbit, 4 * 365, jupiter, 7, moon);
        drawOrbitingObjectName(uraOrbit, 4 * 365, jupiter, "moon");

        drawPlanet(nepOrbit, 12 * 365, jupiter, 8, black_hole);
        drawOrbitingObjectName(nepOrbit, 12 * 365, jupiter, "black hole");

        isTouching();
        pop();
    }
}

function drawOrbitingObjectName(orbit, days, planet, name) {
    // calculate the position of the object name relative to its orbit
    ang = (TWO_PI * orbitSpeed) / (days * orbitDuration);
    x = cos(ang) * orbit; 
    y = sin(ang) * orbit; 

    textAlign(CENTER, TOP);
    fill("#B7B7BC");
    textSize(10)
    text(name, x - planet / 2, y - planet / 2);
}
