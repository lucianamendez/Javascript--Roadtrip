/*
function mystery() {
    var secret = 6;

    function mystery2(multiplier) {
        multiplier *= 3;
        return secret * multiplier;
    }
    return mystery2;
}

var hidden = mystery();
var result = hidden(3);
console.log(result);
//result = 54
*/


/*
function mystery(input) {
    var secret = 5;

    function mystery2(multiplier) {
        multiplier *= input;
        return secret * multiplier;
    }
    return mystery2;
}

var hidden = mystery(4); //hidden is the same as mystery2 so input become 4, also does multiplier 
var result = hidden(2); //input becomes 2, 4*2=8, 5*8 = 40
console.log(result);
//result 40

*/

function mystery(input) {
    var secret = 4; //secret is 4
    input += 2; //hidden makes input to be 5   
    function mystery2(multiplier) { //later multiplier will be 6
        multiplier *= input; //6*5 = 30
        return secret * multiplier; //4 * 30 = 120
    }
    return mystery2; //nothing happens because only returns a function not executed
}

function mystery3(param) { //param is hidden so that means -> mystery2(multiplier)
    function mystery4(bonus) { //bonus is 2 from jumble(2) called by result
        return param(6) + bonus; //param(6)-->mystery2(6) + 2 from bonus = 122
    }
    return mystery4; //returns function mystery4 but not execute
}

var hidden = mystery(3); //makes input become 5 and nothing more because return function not exexuted
//hidden from now is mistery2(multiplier) and input value is 5
var jumble = mystery3(hidden); //
//jumble is the same as mystery4(bonus) with mystery2(multiplier) as param for mystery3(param)
var result = jumble(2); //so this is now mystery4(bonus) with 2 as bonus.

/*  function mystery3(mystery2(multiplier)){  
        function mystery2(2){
            returns mystery2(6) + 2;   = 122
        }
    }
*/

console.log(result);
//result is 122





function warningMaker(obstacle) {
    return function (number, location) {
        console.log("Beware! There have been " + obstacle +
            " sightings in the Cove today!\n" + number + " have been spotted at the " + location + "!"

        );
    };
}

var killerPenguinAlert = warningMaker("killer penguin");
var polarBearAlert = warningMaker("polar bear");
var icebergAlert = warningMaker("iceberg");
var flashBlizzardAlert = warningMaker("flash blizzard");
var snowYetiAlert = warningMaker("snow yeti");


killerPenguinAlert(6, "Ice Caves");
snowYetiAlert(1, "Blizzard Beach");