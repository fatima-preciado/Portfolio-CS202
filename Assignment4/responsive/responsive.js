let circles = [];
let circlesStart = [];
let blurCircles = [];
let blurCirclesInside = [];
let circlesScreen = [];
let circlesScreen1 = [];
let circlesScreen2 = [];
let circlesExclusion = [];
let circlesExclusion1 = [];
let circlesExclusion2 = [];
let circlesSoftLight = [];
let circlesLigtest = [];
let backgroundImage;

function preload() {
    backgroundImage = loadImage('./images/1178px-Vassily_Kandinsky,_1926_-_Several_Circles,_Gugg_0910_25.jpg');
}

function setup() {
    createCanvas(589, 600);
    circlesScreen.push(new SolidCircle([246, 228, 82], 117, 395.4, 45.6));
    circlesScreen.push(new SolidCircle([213, 42, 75], 140, 402, 45.6));
    circlesScreen.push(new SolidCircle([160, 98, 68], 163, 402, 45));
    circlesScreen.push(new SolidCircle([210, 111, 72], 174, 372, 45));
    circlesScreen.push(new SolidCircle([217, 175, 52], 147, 345, 45));

    circlesStart.push(new SolidCircle([29, 68, 181], 253, 229, 258));
    circlesStart.push(new SolidCircle([21, 21, 21], 226, 204, 179));

    circlesScreen1.push(new SolidCircle([197, 145, 230], 308, 129, 70));

    circlesExclusion.push(new SolidCircle([7, 62, 177], 277, 269, 23));
    circlesExclusion.push(new SolidCircle([160, 219, 172], 315, 253, 49));

    circlesScreen2.push(new SolidCircle([218, 165, 39], 337, 304, 78.5));
    circlesScreen2.push(new SolidCircle([181, 158, 59], 295.4, 304.2, 50.6));

    circlesSoftLight.push(new SolidCircle([171, 182, 222], 249, 355, 55));
    circlesSoftLight.push(new SolidCircle([171, 182, 222], 249, 355, 55));
    circlesSoftLight.push(new SolidCircle([171, 182, 222], 249, 355, 55));

    circlesLigtest.push(new SolidCircle([63, 164, 211], 336, 373, 69));
    circlesLigtest.push(new SolidCircle([248, 114, 176], 364, 324, 31.4));
    circlesLigtest.push(new SolidCircle([51, 107, 99], 418.6, 186.5, 100));

    circlesExclusion1.push(new SolidCircle([206, 178, 139], 425, 401, 31.5));

    circlesExclusion2.push(new SolidCircle([212, 181, 83], 546, 424, 15.4));

    circles.push(new SolidCircle([198, 200, 221], 488, 423, 106.8))
    circles.push(new SolidCircle([17, 17, 19], 80, 337, 68));
    circles.push(new SolidCircle([180, 181, 206], 80, 337, 60));
    circles.push(new SolidCircle([17, 17, 19], 88, 325, 19));
    circles.push(new SolidCircle([252, 231, 46], 136, 284, 12));
    circles.push(new SolidCircle([17, 17, 19], 136, 284, 9));
    circles.push(new SolidCircle([17, 17, 19], 179.6, 342, 11));
    circles.push(new SolidCircle([205, 91, 133], 179.6, 342, 7));
    circles.push(new SolidCircle([201, 161, 211], 200.5, 340, 8));
    circles.push(new SolidCircle([28, 15, 16], 235.7, 384.5, 7.6));
    circles.push(new SolidCircle([29, 23, 32], 350, 333, 9.2));
    circles.push(new SolidCircle([38, 36, 45], 418.6, 186.5, 19));
    circles.push(new SolidCircle([250, 227, 82], 57, 59.5, 22));
    circles.push(new SolidCircle([249, 149, 213], 71, 120, 49));
    circles.push(new SolidCircle([226, 49, 76], 518.5, 87.5, 17));
    circles.push(new SolidCircle([251, 225, 137], 425.5, 105, 43));
    circles.push(new SolidCircle([146, 222, 231], 458.5, 410.3, 25));
    circles.push(new SolidCircle([206, 19, 3], 492, 380.4, 11));
    circles.push(new SolidCircle([25, 20, 23], 504.5, 381.9, 7));
    circles.push(new SolidCircle([239, 218, 40], 468.8, 491.6, 13.5));
    circles.push(new SolidCircle([213, 58, 82], 454, 525.4, 20));
    circles.push(new SolidCircle([53, 136, 185], 518.2, 546.4, 16.5));
    circles.push(new SolidCircle([245, 185, 37], 294, 455.5, 22.5));
    circles.push(new SolidCircle([37, 153, 218], 112.8, 489.2, 29));
    circles.push(new SolidCircle([253, 172, 28], 484, 136, 20));
    circles.push(new SolidCircle([20, 76, 213], 526.2, 306.5, 15));
    circles.push(new SolidCircle([246, 157, 215], 82.7, 463.7, 15));
    circles.push(new SolidCircle([26, 27, 34], 74.4, 509, 10));

    blurCircles.push(new blurCircle([246, 228, 82], 117, 395.4, 35));
    blurCircles.push(new blurCircle([213, 42, 75], 140, 402, 35));
    blurCircles.push(new blurCircle([160, 98, 68], 163, 402, 35));
    blurCircles.push(new blurCircle([228, 232, 219], 174, 372, 35));
    blurCircles.push(new blurCircle([228, 232, 219], 147, 345, 35));
    blurCircles.push(new blurCircle([144, 229, 252], 80, 337, 41));
    blurCircles.push(new blurCircle([144, 229, 252], 80, 337, 43));
    blurCircles.push(new blurCircle([144, 229, 252], 80, 337, 45));
    blurCircles.push(new blurCircle([228, 232, 219], 308, 129, 50));
    blurCircles.push(new blurCircle([228, 232, 219], 308, 129, 57));
    blurCircles.push(new blurCircle([228, 232, 219], 337, 304, 48.5));
    blurCircles.push(new blurCircle([228, 232, 219], 337, 304, 50.5));
    blurCircles.push(new blurCircle([228, 232, 219], 253, 229, 148));
    blurCircles.push(new blurCircle([228, 232, 219], 253, 229, 138));
    blurCircles.push(new blurCircle([228, 232, 219], 235.7, 384.5, 10));
    blurCircles.push(new blurCircle([228, 232, 219], 235.7, 384.5, 10));
    blurCircles.push(new blurCircle([228, 232, 219], 235.7, 384.5, 10));
    blurCircles.push(new blurCircle([228, 232, 219], 249, 355, 35));
    blurCircles.push(new blurCircle([87, 191, 212], 418.6, 186.5, 25));
    blurCircles.push(new blurCircle([87, 191, 212], 418.6, 186.5, 40));


    blurCirclesInside.push(new blurCircleInsde([87, 191, 212], 418.6, 186.5, 20));
    blurCirclesInside.push(new blurCircleInsde([87, 191, 212], 418.6, 186.5, 26));
    blurCirclesInside.push(new blurCircleInsde([224, 210, 181], 458.5, 410.3, 40));
    blurCirclesInside.push(new blurCircleInsde([92, 245, 222], 484, 136, 21));
    blurCirclesInside.push(new blurCircleInsde([92, 245, 222], 484, 136, 24));
    blurCirclesInside.push(new blurCircleInsde([92, 245, 222], 526.2, 306.5, 18));
    blurCirclesInside.push(new blurCircleInsde([92, 245, 222], 526.2, 306.5, 22));
    blurCirclesInside.push(new blurCircleInsde([180, 190, 97], 82.7, 463.7, 17));
    blurCirclesInside.push(new blurCircleInsde([180, 190, 97], 82.7, 463.7, 17));
    blurCirclesInside.push(new blurCircleInsde([180, 190, 97], 82.7, 463.7, 17));
    blurCirclesInside.push(new blurCircleInsde([180, 190, 97], 74.4, 509, 12));
    blurCirclesInside.push(new blurCircleInsde([180, 190, 97], 74.4, 509, 14));

}

function draw() {
    background(34, 34, 44);

    for (let circle of blurCircles) {
        circle.update();
        circle.display();
    }

    // transparent circles
    blendMode(SCREEN);
    for (let circle of circlesScreen) {
        circle.update();
        circle.display();
    }
    blendMode(BLEND);

    // purple in blue/black 
    for (let circle of circlesStart) {
        circle.update();
        circle.display();
    }

    blendMode(SCREEN);
    for (let circle of circlesScreen1) {
        circle.update();
        circle.display();
    }
    blendMode(BLEND)

    blendMode(EXCLUSION);
    for (let circle of circlesExclusion) {
        circle.update();
        circle.display();
    }
    blendMode(BLEND);

    // yellow in blue
    blendMode(SCREEN);
    for (let circle of circlesScreen2) {
        circle.update();
        circle.display();
    }
    blendMode(BLEND);

    // big purple in blue
    blendMode(SOFT_LIGHT);
    for (let circle of circlesSoftLight) {
        circle.update();
        circle.display();
    }
    blendMode(BLEND);

    // blue
    blendMode(LIGHTEST);
    for (let circle of circlesLigtest) {
        circle.update();
        circle.display();
    }
    blendMode(BLEND);

    blendMode(EXCLUSION);
    for (let circle of circlesExclusion1) {
        circle.update();
        circle.display();
    }
    blendMode(BLEND)

    blendMode(EXCLUSION);
    for (let circle of circlesExclusion2) {
        circle.update();
        circle.display();
    }
    blendMode(BLEND)

    for (let circle of blurCirclesInside) {
        circle.update();
        circle.display();
    }

    for (let circle of circles) {
        circle.update();
        circle.display();
    }
}

class SolidCircle {
    constructor(color, x, y, diameter) {
        this.color = color;
        this.x = x;
        this.y = y;
        this.diameter = diameter;

    }

    update() {
        // Calculate distance from mouse to circle center
        let d = dist(mouseX, mouseY, this.x, this.y);
        // If mouse is within a certain range, move the circle away
        if (d < 100) {
            // Calculate angle between mouse and circle
            let angle = atan2(this.y - mouseY, this.x - mouseX);
            // Move circle away from mouse
            this.x += cos(angle) * 2;
            this.y += sin(angle) * 2;
        }
    }

    display() {
        drawCircle(this.color, this.x, this.y, this.diameter);
    }
}

class blurCircle {
    constructor(color, x, y, diameter) {
        this.color = color;
        this.x = x;
        this.y = y;
        this.diameter = diameter;

    }

    update() {
        // Calculate distance from mouse to circle center
        let d = dist(mouseX, mouseY, this.x, this.y);
        // If mouse is within a certain range, move the circle away
        if (d < 100) {
            // Calculate angle between mouse and circle
            let angle = atan2(this.y - mouseY, this.x - mouseX);
            // Move circle away from mouse
            this.x += cos(angle) * 2;
            this.y += sin(angle) * 2;
        }
    }

    display() {
        drawBlurredCircle(this.color, this.x, this.y, this.diameter);
    }
}

class blurCircleInsde {
    constructor(color, x, y, diameter) {
        this.color = color;
        this.x = x;
        this.y = y;
        this.diameter = diameter;

    }

    update() {
        // Calculate distance from mouse to circle center
        let d = dist(mouseX, mouseY, this.x, this.y);
        // If mouse is within a certain range, move the circle away
        if (d < 100) {
            // Calculate angle between mouse and circle
            let angle = atan2(this.y - mouseY, this.x - mouseX);
            // Move circle away from mouse
            this.x += cos(angle) * 2;
            this.y += sin(angle) * 2;
        }
    }

    display() {
        drawBlurredCircleInside(this.color, this.x, this.y, this.diameter);
    }
}

function drawCircle(color, x, y, diameter) {
    fill(color);
    ellipse(x, y, diameter);
}

function drawBlurredCircle(color, x, y, blurRadius) {
    noStroke();
    let transparency = 4.5;
    for (let i = 0; i < blurRadius; i++) {
        fill(color[0], color[1], color[2], transparency);
        ellipse(x, y, blurRadius + i);
    }
}

function drawBlurredCircleInside(color, x, y, blurRadius) {
    noStroke();
    let transparency = 30;
    for (let i = 0; i < blurRadius; i++) {
        fill(color[0], color[1], color[2], transparency);
        ellipse(x, y, blurRadius - i);
    }
}
