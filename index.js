var count = 0;
var batchCounter = [];
var totalCount = 0;

changeTotalCounter(totalCount);
changeBatchCounter(batchCounter);
changeCount(count);
addEvent("incerement", "click", incerement);
addEvent("save", "click", save);
addEvent("refresh", "click", refresh);

function changeTotalCounter(value) {
    document.getElementById("totalCount").textContent = value;
}

function changeBatchCounter(currentBatchCounter) {
    document.querySelector("#batchParagraph").textContent = currentBatchCounter;
}

function changeCount(currentCount) {
    document.querySelector("h2").textContent = currentCount;
}

function addEvent(item, whichEvent, action) {
    document.getElementById(item).addEventListener(whichEvent, action);
}

function incerement() {
    count++;
    addAnimation("incerement", "pressed", 100);
    changeCount(count);
}

function save() {
    if (count > 0) {
        batchCounter.push(count);
        for (i = 0; i < batchCounter.length; i++) {
            totalCount += batchCounter[i];
        }
        changeTotalCounter(totalCount);
        totalCount = 0;
    }
    count = 0;
    changeCount(count);
    addAnimation("save", "pressed", 100);
    changeBatchCounter(batchCounter);
}

function refresh() {
    addAnimation("refresh", "pressed", 100);
    count = 0;
    batchCounter = [];
    totalCount = 0;
    changeTotalCounter(totalCount);
    changeCount(count);
    changeBatchCounter(batchCounter);
}

function addAnimation(wichBtn, newClass, period) {
    var identification = document.getElementById(wichBtn);
    identification.classList.add(newClass);
    setTimeout(function () {
        identification.classList.remove(newClass);
    }, period);
}
