var output = document.body;

var myFunctions = {
    modifyArray: function () {
        let array1 = [1, 2, 3, "four"];
        console.log(array1);

        array1.unshift("start");
        array1.pop();
        array1[1] = "modified";

        console.log(array1);
    },
    
    arrayOperations: function () {
        let array2 = [5, 6, 7, "eight"];
        console.log(array2);

        array2.push("end");
        array2.shift();
        array2.splice(3, 0, "middle");

        console.log(array2);
    },

    checkInteger: function (number) {
        if (Number.isInteger(number)) {
            return "Число ціле";
        } else {
            return "Число не ціле";
        }
    }
};

// Виклики функцій через консоль
myFunctions.modifyArray();
myFunctions.arrayOperations();

let x = myFunctions.checkInteger(10);
let y = myFunctions.checkInteger(10.5);
let z = myFunctions.checkInteger(11);

console.log(x);
console.log(y);
console.log(z);
