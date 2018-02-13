function adventureSelector(userChoice) {
    if (userChoice == 1) {
        return function () {
            console.log("You selected the Vines of Doom!");
        };
    } else if (userChoice == 2) {
        return function () {
            console.log("Looks like you want the Lake of Despair!");
        };
    } else if (userChoice == 3) {
        return function () {
            console.log("The Caves of Catastrophe!");
        };
    }
}
adventureSelector(3)(); //inmediate invocation of the returned function

var puzzlers = [
    function (a) {
        return 8 * a - 10;
    },
    function (a) {
        return (a - 3) * (a - 3) * (a - 3);
    },
    function (a) {
        return a * a + 4;
    },
    function (a) {
        return a % 5;
    }
];
var start = 2;

var applyAndEmpty = function (input, queue) {
    var length = queue.length;//needs to be declared outside the loop because shift reduces the length in every iteration
    for (var i = 0; i < length; i++) {
        input = queue.shift()(input); //shift removes and return the value and in this case also executes the function
    }
    return input;
};

console.log(applyAndEmpty(start, puzzlers));


/*
“What is obtained when the result of passing 9 into the fourth function of the puzzlers2 array 
is then passed into the function whose array index matches the result of passing 3 into the second function of the puzzlers2 array?”
*/

var puzzlers2 = [
    function (a) {
        return 8 * a - 10;
    },
    function (a) {
        return (a - 3) * (a - 3) * (a - 3);
    },
    function (a) {
        return a * a + 4;
    },
    function (a) {
        return a % 5;
    }
];


console.log(puzzlers2[3](9)); //result = 4
console.log(puzzlers2[1](3)); //result = 0
console.log(puzzlers2[0](4)); //function index 0 passing 4

console.log(puzzlers2[puzzlers2[1](3)](puzzlers2[3](9)));  //in one line
/*executes itself from inside to outside. 
First function index 3 with 9 as an argument, 
later function index 1 with 3. 
And then with the returning results executes
3rdfunction([2nd function](1st function))
*/