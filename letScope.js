let message = "Hi";

{
    let message = "Bye";
    console.log("Local:", message );
}

console.log("Global:", message);
console.log("");

var fs = [];

//for (var i = 0; i < 10; i++) {
for (let i = 0; i < 10; i++) {
    fs.push( function () {
        console.log(i);
    });
}

fs.forEach( function(f) {
    f();
});