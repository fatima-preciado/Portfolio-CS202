let backgroundImage;
let pulsationSpeed = 0.04;
let pulsationAmplitude = 5;

function preload() {
    backgroundImage = loadImage('./images/1178px-Vassily_Kandinsky,_1926_-_Several_Circles,_Gugg_0910_25.jpg');
}

function setup() {
    createCanvas(589, 600);
}

function draw() {
    background(34, 34, 44);

    pulsationAmplitude = sin(frameCount * pulsationSpeed) * 10;

    drawPulsatingBlurredCircle([246, 228, 82], 117, 395.4, 35, pulsationAmplitude);
    drawPulsatingBlurredCircle([213, 42, 75], 140, 402, 35, pulsationAmplitude);
    drawPulsatingBlurredCircle([160, 98, 68], 163, 402, 35, pulsationAmplitude);
    drawPulsatingBlurredCircle([228, 232, 219], 174, 372, 35, pulsationAmplitude);
    drawPulsatingBlurredCircle([228, 232, 219], 147, 345, 35, pulsationAmplitude);

    drawPulsatingBlurredCircle([144, 229, 252], 80, 337, 41, pulsationAmplitude);
    drawPulsatingBlurredCircle([144, 229, 252], 80, 337, 43, pulsationAmplitude);
    drawPulsatingBlurredCircle([144, 229, 252], 80, 337, 45, pulsationAmplitude);

    drawPulsatingBlurredCircle([228, 232, 219], 308, 129, 50, pulsationAmplitude);
    drawPulsatingBlurredCircle([228, 232, 219], 308, 129, 57, pulsationAmplitude);

    drawPulsatingBlurredCircle([228, 232, 219], 337, 304, 48.5, pulsationAmplitude);
    drawPulsatingBlurredCircle([228, 232, 219], 337, 304, 50.5, pulsationAmplitude);

    drawPulsatingBlurredCircle([228, 232, 219], 253, 229, 148, pulsationAmplitude);
    drawPulsatingBlurredCircle([228, 232, 219], 253, 229, 138, pulsationAmplitude);

    drawPulsatingBlurredCircle([228, 232, 219], 235.7, 384.5, 10, pulsationAmplitude);

    drawPulsatingBlurredCircle([228, 232, 219], 249, 355, 35, pulsationAmplitude);

    // transparent circles
    blendMode(SCREEN);
    drawCircle([246, 228, 82], 117, 395.4, 45.6);
    drawCircle([213, 42, 75], 140, 402, 45.6);
    drawCircle([160, 98, 68], 163, 402, 45);
    drawCircle([210, 111, 72], 174, 372, 45);
    drawCircle([217, 175, 52], 147, 345, 45);
    blendMode(BLEND);

    // purple with black around
    strokeWeight(0.5);
    stroke(17, 17, 19);
    drawCircle([17, 17, 19], 80, 337, 68);

    noStroke();
    drawCircle([180, 181, 206], 80, 337, 60);

    // black inside
    drawCircle([17, 17, 19], 88, 325, 19);

    // purple in blue/black 
    drawCircle([29, 68, 181], 253, 229, 258);
    drawCircle([21, 21, 21], 226, 204, 179);

    blendMode(SCREEN);
    drawCircle([197, 145, 230], 308, 129, 70);
    blendMode(BLEND)

    blendMode(EXCLUSION);
    // inside black blue
    drawCircle([7, 62, 177], 277, 269, 23);
    drawCircle([160, 219, 172], 315, 253, 49);
    blendMode(BLEND);

    // yellow in blue
    blendMode(SCREEN);
    drawCircle([218, 165, 39], 337, 304, 78.5);
    drawCircle([181, 158, 59], 295.4, 304.2, 50.6);
    blendMode(BLEND);

    // black circle with yellow around
    drawCircle([252, 231, 46], 136, 284, 12);
    drawCircle([17, 17, 19], 136, 284, 9);

    // red circle with black around
    drawCircle([17, 17, 19], 179.6, 342, 11);
    drawCircle([205, 91, 133], 179.6, 342, 7);

    // purple
    drawCircle([201, 161, 211], 200.5, 340, 8);

    // big purple in blue
    blendMode(SOFT_LIGHT);
    drawCircle([171, 182, 222], 249, 355, 55);
    drawCircle([171, 182, 222], 249, 355, 55);
    drawCircle([171, 182, 222], 249, 355, 55);
    blendMode(BLEND);

    // black
    drawCircle([28, 15, 16], 235.7, 384.5, 7.6);

    // blue
    blendMode(LIGHTEST);
    drawCircle([63, 164, 211], 336, 373, 69);
    drawCircle([248, 114, 176], 364, 324, 31.4);
    drawCircle([51, 107, 99], 418.6, 186.5, 100)
    blendMode(BLEND);

    // black
    drawCircle([29, 23, 32], 350, 333, 9.2);

    drawPulsatingBlurredCircle([87, 191, 212], 418.6, 186.5, 25, pulsationAmplitude);
    drawPulsatingBlurredCircle([87, 191, 212], 418.6, 186.5, 40, pulsationAmplitude);

    drawPulsatingBlurredCircleInside([87, 191, 212], 418.6, 186.5, 20, pulsationAmplitude)
    drawPulsatingBlurredCircleInside([87, 191, 212], 418.6, 186.5, 26, pulsationAmplitude)

    drawCircle([38, 36, 45], 418.6, 186.5, 19)

    // yellow
    drawCircle([250, 227, 82], 57, 59.5, 22);
    // pink
    drawCircle([249, 149, 213], 71, 120, 49);
    // red
    drawCircle([226, 49, 76], 518.5, 87.5, 17);
    // yellow
    drawCircle([251, 225, 137], 425.5, 105, 43);

    // light purple
    drawCircle([198, 200, 221], 488, 423, 106.8);
    blendMode(EXCLUSION);
    drawCircle([206, 178, 139], 425, 401, 31.5);
    blendMode(BLEND)

    // inside light burble
    drawPulsatingBlurredCircleInside([224, 210, 181], 458.5, 410.3, 40, pulsationAmplitude);
    drawCircle([146, 222, 231], 458.5, 410.3, 25);

    // red
    drawCircle([206, 19, 3], 492, 380.4, 11);
    // black
    drawCircle([25, 20, 23], 504.5, 381.9, 7);

    // yellow
    blendMode(EXCLUSION);
    drawCircle([212, 181, 83], 546, 424, 15.4);
    blendMode(BLEND)

    // yellow
    drawCircle([239, 218, 40], 468.8, 491.6, 13.5);
    // red
    drawCircle([213, 58, 82], 454, 525.4, 20);
    // blue
    drawCircle([53, 136, 185], 518.2, 546.4, 16.5);
    // orange
    drawCircle([245, 185, 37], 294, 455.5, 22.5);
    // blue
    drawCircle([37, 153, 218], 112.8, 489.2, 29);

    // orange with green bg
    drawPulsatingBlurredCircleInside([92, 245, 222], 484, 136, 21, pulsationAmplitude);
    drawPulsatingBlurredCircleInside([92, 245, 222], 484, 136, 24, pulsationAmplitude);
    drawCircle([253, 172, 28], 484, 136, 20)

    // blue with green bg
    drawPulsatingBlurredCircleInside([92, 245, 222], 526.2, 306.5, 18, pulsationAmplitude);
    drawPulsatingBlurredCircleInside([92, 245, 222], 526.2, 306.5, 22, pulsationAmplitude);
    drawCircle([20, 76, 213], 526.2, 306.5, 15)

    // pink with white/yellowish bg
    drawPulsatingBlurredCircleInside([180, 190, 97], 82.7, 463.7, 17, pulsationAmplitude);
    drawPulsatingBlurredCircleInside([180, 190, 97], 82.7, 463.7, 17, pulsationAmplitude);
    drawPulsatingBlurredCircleInside([180, 190, 97], 82.7, 463.7, 17, pulsationAmplitude);
    drawCircle([246, 157, 215], 82.7, 463.7, 15)

    // black with yellow bg
    drawPulsatingBlurredCircleInside([180, 190, 97], 74.4, 509, 12, pulsationAmplitude);
    drawPulsatingBlurredCircleInside([180, 190, 97], 74.4, 509, 14, pulsationAmplitude);
    drawCircle([26, 27, 34], 74.4, 509, 10)


    
}

function drawCircle(color, x, y, diameter) {
    fill(color);
    ellipse(x, y, diameter);
}

function drawPulsatingBlurredCircle(color, x, y, blurRadius, amplitude) {
    noStroke();
    let transparency = 4.5;
    for (let i = 0; i < blurRadius; i++) {
        let pulsation = sin(frameCount * pulsationSpeed) * amplitude;
        fill(color[0], color[1], color[2], transparency);
        ellipse(x, y, (blurRadius + pulsation) + i);
    }
}

function drawPulsatingBlurredCircleInside(color, x, y, blurRadius, amplitude) {
    noStroke();
    let transparency = 30;
    for (let i = 0; i < blurRadius; i++) {
        let pulsation = sin(frameCount * pulsationSpeed) * amplitude;
        fill(color[0], color[1], color[2], transparency);
        ellipse(x, y, (blurRadius + pulsation) - i);
    }
}