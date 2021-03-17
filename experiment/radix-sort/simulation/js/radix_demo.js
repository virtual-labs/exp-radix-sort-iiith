var radixArtefact = new RadixSort();
initializeList();
initializeBuckets();


function handlers() {
    document.body.onresize = function() {
        draw();
    };

    document.getElementById('array_length').onkeypress = function(event) {
        return restrictToNumbers(event);
    };

    document.getElementById('nelements').onclick = function() {
        changeArray();
    };

    document.getElementById('interval').oninput = function() {
        changeInterval();
    };

    document.getElementById('interval').onchange = function() {
        changeInterval();
    };

    document.getElementById('next').onclick = function() {
        startSort();
    };
    
    document.getElementById('step').onclick = function() {
        step();
    };

    document.getElementById('reset').onclick = function() {
        reset();
    };

    document.getElementById('pause').onclick = function() {
        pause();
    };
}


function onLoadTriggers() {
    handlers();    
    reset();
}

document.body.onload = function() {
    onLoadTriggers();
};


function draw() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    canvas.width = 1000;
    canvas.height = 400;
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.font = '14px sans-serif';
    context.strokeStyle = 'black';

    drawList(
        context,
        radixArtefact.list,
        -70 + 30 * (radixArtefact.maxSize - radixArtefact.arraySize),
        20
    );
    drawBuckets(context, -119, 70, radixArtefact.bucket);
    drawLine(
        context,
        -50 + 30 * (radixArtefact.maxSize - radixArtefact.arraySize),
        20,
        radixArtefact.iterator % radixArtefact.arraySize,
        'Current'
    );

    var commentBox = document.getElementById('ins');
    if (radixArtefact.iterator === 0 && radixArtefact.position === 0) {
        commentBox.innerHTML =
            "Let's start sorting the array! We will first start sorting according to the " +
            radixArtefact.placeValue[radixArtefact.position] +
            ' position';
    }

    if (radixArtefact.sorted) {
        commentBox.innerHTML =
            "We have finished sorting according to the hundred's position. List is now <strong>sorted</strong>!";
    }
    context.stroke();
}


function takeAStep() {
    var commentBox = document.getElementById('ins');
    commentBox.innerHTML = '';
    if (radixArtefact.iterator < radixArtefact.list.length) {
        radixArtefact.digit = getDigit(
            radixArtefact.list[radixArtefact.iterator],
            radixArtefact.position
        );
        commentBox.innerHTML =
            radixArtefact.list[radixArtefact.iterator] +
            ' was placed in b[' +
            radixArtefact.digit +
            '] as it has ' +
            radixArtefact.digit +
            " in it's " +
            radixArtefact.placeValue[radixArtefact.position] +
            ' position';
        radixArtefact.bucket[radixArtefact.digit][
            radixArtefact.bucket[radixArtefact.digit].length
        ] = radixArtefact.list[radixArtefact.iterator];
        radixArtefact.iterator++;
        return false;
    } else if (radixArtefact.position < 2) {
        radixArtefact.iterator = 0;
        commentBox.innerHTML +=
            'List has now completed sorting according to ' +
            radixArtefact.placeValue[radixArtefact.position] +
            ' position.<br/>' +
            ' Notice all the elements were picked up from the buckets and put back in the array in order from b[0] to b[9]' +
            'Now we will start sorting according to the ' +
            radixArtefact.placeValue[radixArtefact.position + 1] +
            ' position';
        radixArtefact.position++;
        bucketsToList();
        clearBuckets();
        return false;
    } else {
        bucketsToList();
        clearBuckets();
        return true;
    }
}
