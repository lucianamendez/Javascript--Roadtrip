var runAway = function () {
    var toAlert = "";
    for (var i = 0; i < 5; i++) {
        toAlert = toAlert + "Lions, Tigers, and Bears, Oh My!!\n";
    }
    console.log(toAlert);
};

runAway();


var people = 30;
var rain = 2;
var sharks = 4;

var fearGenerated = function (numPeeps, rainInInches, numSharks) {
    var rainFear = numPeeps * rainInInches;
    var sharkFear = numSharks * numSharks * numSharks;
    var totalFear = sharkFear + rainFear;
    return totalFear;
};

var fear = fearGenerated(people, rain, sharks);


console.log(fear);
console.log("The formula for fear: " + fearGenerated);

var fearMessage = function () {
    if (fear < 200) {
        return confirm("Fear Level: LOW\nStill wanna ride?");
    } else if (fear >= 200 && fear <= 300) {
        return confirm("Fear Level: MEDIUM\nThink you'll make it?");
    }
};

function confirm(message) {
    return message;
}

function confirmRide(confirmToGo) {
    return confirmToGo();
}
var startRide = confirmRide(fearMessage);

console.log(startRide);