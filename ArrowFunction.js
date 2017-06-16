
var anonymousFunction = function (message, name) {
    return message + " - " + name;
}

console.log("Anonymous Function: ", anonymousFunction("Hello World!", "Marcos Rosada"));



var arrowFunction = (message, name) => message + " - " + name

console.log("Arrow Function: ", arrowFunction("Hello World!", "Marcos Rosada"));