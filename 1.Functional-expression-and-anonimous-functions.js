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
console.log("The formula for fear: "+fearGenerated);