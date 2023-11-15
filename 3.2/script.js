let H = document.getElementById("heading");
H.style.color = "blue";
H.innerText = "Змінений заголовок";

let text = document.querySelectorAll(".content");
    text.forEach(function (element) {
        element.style.fontSize = "30px";
    });

let listItems = document.querySelectorAll(".list li");
let List1 = listItems[0];
let List2 = listItems[1];
let List3 = listItems[2];
        
List1.style.fontWeight = "bold";
List2.style.fontStyle = "italic";
List3.style.textDecoration = "underline";


let link = document.getElementById("link");
    link.addEventListener("click", function (event) {
        event.preventDefault();
        alert("Ви натиснули на посилання.");
    });
