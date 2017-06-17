function doSomething(greeting, name = 'John') {
    console.log(greeting + ', ' + name);
}

doSomething(); // undefined, John
doSomething('Sup', 'Peter'); // Sup, John


let receive = (func = () => console.log('Function complete')) => func();

receive(); // Function complete