	//1
var button = document.getElementById("myButton");
    button.addEventListener("click", function() {
        alert("Кнопка була натиснута!");
    });
	//2
var myInp = document.getElementById("myInput");
	myInp.addEventListener("keydown", function() {
        console.log("Клавіша була натиснута!");
    });
	//3
var myInp2 = document.getElementById("Input2");
	myInp2.addEventListener("focus", function() {
        console.log("Елемент отримав фокус!");
    });
	myInp2.addEventListener("blur", function() {
        console.log("Елемент втратив фокус!");
    });
	//4
    document.addEventListener("DOMContentLoaded", function() {
        console.log("Документ повністю завантажено!");
    });
	//5
	var button2 = document.getElementById("button3");

    button2.addEventListener("click", function() {
        console.log("Подія виникла!");
    });

    button2.addEventListener("click", function() {
        console.log("Це один обробник події!");
    });