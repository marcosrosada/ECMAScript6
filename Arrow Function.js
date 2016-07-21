
var createGreeting = function (message, name) {
    return message + " - " + name;
}

console.log("Call createGreeting(): ", createGreeting("Hello World!", "Marcos Rosada"));

var arrowGreeting  = (message, name) => {
    return message + " - " + name;
}

console.log("Call arrowGreeting: ", arrowGreeting("Hello World!", "Marcos Rosada"));