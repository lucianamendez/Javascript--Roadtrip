var passengers = [
    ["Thomas", "Meeks"],
    ["Gregg", "Pollack"],
    ["Christine", "Wong"],
    ["Dan", "McGaw"]
];
var modifiedNames = passengers.map(function (arrayCell) {
    return arrayCell[0] + " " + arrayCell[1];
});

console.log(modifiedNames);

modifiedNames.map(function (name) {
    console.log("Yo, " + name + "!");
});

var puzzlers = [
    function (input) {
        return (3 * input) - 8;
    },
    function (input) {
        return (input + 2) * (input + 2) * (input + 2);
    },
    function (input) {
        return (input * input) - 9;
    },
    function (input) {
        return input % 4;
    }
];