import _ from 'lodash';
console.log("Inside Bundle");

document.getElementById('click-me').addEventListener('click', function printInConsole() {
    console.log("10", _.chunk(['a', 'b', 'c', 'd'], 2))
})
