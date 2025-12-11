class RadixSort {
    constructor() {
        this.arraySize = 8;
        this.maxSize = 15;
        this.minSize = 5;
        this.minInterval = 3000;
        this.minSpeed = 100;
        this.maxSpeed = 1200;
        this.interval = { obj: null, play: false };
        this.iterator = 0;
        this.position = 0;
        this.attempted = 0;
        this.enteredValue;
        this.digit;
        this.sorted = false;
        this.list = [];
        this.bucket = [];
        this.placeValue = {
            0: "<strong>unit's</strong>",
            1: "<strong>ten's</strong>",
            2: "<strong>hundred's</strong>"
        };
    }
};


function reset() {
    radixArtefact.sorted = false;
    
    // Reset array size to default (8)
    radixArtefact.arraySize = 8;
    var arraySizeInput = document.getElementById('array_length');
    if (arraySizeInput) {
        arraySizeInput.value = 8;
    }
    
    initializeList();
    clearBuckets();
    radixArtefact.iterator = 0;
    radixArtefact.position = 0;
    radixArtefact.digit = undefined;
    
    // Stop any running animation
    radixArtefact.interval.play = false;
    clearInterval(radixArtefact.interval.obj);
    
    // Reset button states (only for demo page)
    var nextButton = document.getElementById('next');
    if (nextButton) {
        nextButton.textContent = 'Start';
    }
    var nElementsBtn = document.getElementById('nelements');
    if (nElementsBtn) {
        nElementsBtn.disabled = false;
    }
    
    // Reset comment box to initial state
    var commentBox = document.getElementById('ins');
    if (commentBox) {
        commentBox.innerHTML = 'Click Start to begin sorting the array.';
    }
    
    // Handle step button visibility based on slider (demo page only)
    var slider = document.getElementById('interval');
    var stepBtn = document.getElementById('step');
    if (slider && stepBtn && nextButton) {
        var speed = slider.value;
        if(speed > radixArtefact.minSpeed) {
            stepBtn.hidden = true;
            nextButton.hidden = false;
        }
    }

    draw();
}


function validSize(size) {
    if(size > radixArtefact.maxSize) {
        return radixArtefact.maxSize;
    } else if(size < radixArtefact.minSize) {
        return radixArtefact.minSize
    } else {
        return size;
    }
}


function changeArray() {
    var newSize = validSize(Number(document.getElementById('array_length').value));
    radixArtefact.arraySize = newSize;
    
    // Update input field to show validated size
    document.getElementById('array_length').value = newSize;
    
    // Reset simulation state but keep the new array size
    radixArtefact.sorted = false;
    initializeList();
    clearBuckets();
    radixArtefact.iterator = 0;
    radixArtefact.position = 0;
    radixArtefact.digit = undefined;
    
    // Stop any running animation
    radixArtefact.interval.play = false;
    clearInterval(radixArtefact.interval.obj);
    
    // Reset button states (only for pages that have these elements)
    var nextButton = document.getElementById('next');
    if (nextButton) {
        nextButton.textContent = 'Start';
    }
    var nElementsBtn = document.getElementById('nelements');
    if (nElementsBtn) {
        nElementsBtn.disabled = false;
    }
    
    // Reset comment box to initial state
    var commentBox = document.getElementById('ins');
    if (commentBox) {
        commentBox.innerHTML = 'Click Start to begin sorting the array.';
    }
    
    // Handle step button visibility based on slider (demo page only)
    var slider = document.getElementById('interval');
    var stepBtn = document.getElementById('step');
    if (slider && stepBtn && nextButton) {
        var speed = slider.value;
        if(speed > radixArtefact.minSpeed) {
            stepBtn.hidden = true;
            nextButton.hidden = false;
        }
    }
    
    draw();
}


function initializeList() {
    radixArtefact.list = [];

    for (var i = 0; i < radixArtefact.arraySize; i++) {
        radixArtefact.list.push(Math.floor(Math.random() * 1000));
    }
}


function initializeBuckets() {
    for (var i = 0; i < 10; i++) {
        radixArtefact.bucket[i] = [];
    }
}


function clearBuckets() {
    for (var i = 0; i < 10; i++) {
        radixArtefact.bucket[i].splice(0, radixArtefact.bucket[i].length);
    }
}


function drawArrowLine(context, x1, y1, x2, y2) {
    context.fillStyle = 'black';
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);

    var slope = (y1 - y2) / (x1 - x2);

    var arctan = Math.atan(slope);

    var set45 = 1.57 / 2;

    if (x1 < x2) {
        set45 = -1.57 * 1.5;
    }

    var arrlen = 7;

    context.moveTo(x2, y2);
    context.lineTo(
        x2 + Math.cos(arctan + set45) * arrlen,
        y2 + Math.sin(arctan + set45) * arrlen
    );

    context.moveTo(x2, y2);
    context.lineTo(
        x2 + Math.cos(arctan - set45) * arrlen,
        y2 + Math.sin(arctan - set45) * arrlen
    );
}


function drawLine(context, startX, startY, index, title) {
    context.fillStyle = 'black';
    context.fillText(title, 60 * (index + 1) + startX + 45, startY);
    var x = 60 * (index + 1) + startX + 65;
    var y = startY + 10;
    context.fillStyle = 'black';
    drawArrowLine(context, x, y, x, y + 35);
}


function drawList(context, list, startX, startY) {
    context.font = '15px Arial';

    for (var i = 0; i < list.length; i++) {
        context.fillStyle = '#288ec8';
        context.fillRect(60 * (i + 2) + startX, 50 + startY, 48, 50);
    }
    for (var k = 0; k < list.length; k++) {
        if (i - 1 === k) {
            context.fillStyle = '#288ec8';
            context.fillText(
                list[k] + '',
                60 * (k + 2) + 10 + startX,
                80 + startY
            );
            context.fillStyle = 'black';
        }
        context.fillStyle = 'white';
        context.font = '17px Arial';
        context.fillText(list[k] + '', 60 * (k + 2) + 10 + startX, 80 + startY);
        context.fillStyle = 'black';

        context.rect(60 * (k + 2) + startX, 50 + startY, 48, 50);
    }
}


function drawBuckets(context, startX, startY, bucket) {
    for (var i = 0; i < 10; i++) {
        context.fillStyle = '#a4c652';
        context.fillRect(80 * (i + 2) + startX + 70, 90 + startY, 50, 150);
        context.fillStyle = 'black';

        context.rect(80 * (i + 2) + startX + 70, 90 + startY, 50, 150);
        context.font = '18px Arial';

        context.fillText(
            'b[' + i + ']',
            80 * (i + 2) + startX + 78,
            260 + startY
        );
        context.fillStyle = 'black';

        for (var j = 0; j < bucket[i].length; j++) {
            context.fillText(
                bucket[i][j],
                80 * (i + 2) + startX + 80,
                j * 20 + 110 + startY
            );
        }

        if (i === radixArtefact.digit && bucket[i].length > 0) {
            context.fillStyle = '#EB0D1B';
            context.fillText(
                bucket[i][bucket[i].length - 1],
                80 * (i + 2) + startX + 80,
                (bucket[i].length - 1) * 20 + 110 + startY
            );
        }
    }
}


function step() {
    if (takeAStep()) {
        radixArtefact.sorted = true;
    }
    draw();
}


function bucketsToList() {
    var k = 0;
    for (var i = 0; i < radixArtefact.bucket.length; i++) {
        for (var j = 0; j < radixArtefact.bucket[i].length; j++)
            radixArtefact.list[k++] = radixArtefact.bucket[i][j];
    }
}


function getDigit(number, position) {
    var result = 1;
    for (var i = 0; i < position; i++) result *= 10;

    return Math.floor(number / result) % 10;
}


function changeInterval() {
    var slider = document.getElementById('interval');
    if (slider) {
        var speed = Number(slider.value);
        
        if (speed === Number(radixArtefact.minSpeed)) {
            // Switch to step mode
            if (radixArtefact.interval.play) {
                radixArtefact.interval.play = false;
                clearInterval(radixArtefact.interval.obj);
                document.getElementById('next').textContent = 'Start';
            }
            document.getElementById('step').hidden = false;
            document.getElementById('next').hidden = true;
        } else {
            document.getElementById('step').hidden = true;
            document.getElementById('next').hidden = false;

            if (radixArtefact.interval.play) {
                clearInterval(radixArtefact.interval.obj);
                radixArtefact.interval.obj = setInterval(
                    control,
                    radixArtefact.maxSpeed + radixArtefact.minSpeed - speed
                );
            }
        }
    }
}


function toggleSort() {
    var nextButton = document.getElementById('next');
    var slider = document.getElementById('interval');
    var speed = slider ? Number(slider.value) : radixArtefact.maxSpeed / 2;
    
    // If sorted, reset on click
    if (radixArtefact.sorted) {
        reset();
        return;
    }
    
    // If currently playing, pause it
    if (radixArtefact.interval.play) {
        radixArtefact.interval.play = false;
        clearInterval(radixArtefact.interval.obj);
        nextButton.textContent = 'Resume';
        document.getElementById('nelements').disabled = false;
    } else {
        // Start or resume
        radixArtefact.interval.play = true;
        radixArtefact.interval.obj = setInterval(
            control,
            radixArtefact.maxSpeed + radixArtefact.minSpeed - speed
        );
        nextButton.textContent = 'Pause';
        document.getElementById('nelements').disabled = true;
    }
}





function control() {
    if (radixArtefact.interval.play) {
        step();
        // If sorting just completed, update button
        if (radixArtefact.sorted) {
            radixArtefact.interval.play = false;
            clearInterval(radixArtefact.interval.obj);
            document.getElementById('next').textContent = 'End';
            document.getElementById('nelements').disabled = false;
        }
    }
}


function reload() {
    location.reload(true);
}


function restrictToNumbers(event) {
    var keyPressed = event.which || event.keycode;
    if(
        (keyPressed >= 48 && keyPressed <= 57) ||
        keyPressed === 8 ||
        (keyPressed >= 35 && keyPressed <= 40) ||
        keyPressed === 46
    ) {
        return true;
    } else {
        return false;
    }
}
