let input = document.getElementById("itemInput");
let addButton = document.getElementById("addButton");
let list = document.getElementById("shoppingList");
let clearButton = document.getElementById("clearButton");


// Ավելացնել ապրանք
addButton.onclick = function() {

    let text = input.value;

    // Ստուգում ենք՝ input-ը դատարկ է, թե ոչ
    if (text == "") {
        return;
    }

    // Ստեղծում ենք նոր li
    let item = document.createElement("li");

    // Գրում ենք ապրանքի անունը
    item.innerHTML = text;

    // Սեղմելու դեպքում ապրանքը նշում ենք որպես գնված
    item.onclick = function() {
        item.classList.toggle("purchased");
    };

    // Ստեղծում ենք Ջնջել կոճակը
    let deleteButton = document.createElement("button");

    deleteButton.innerHTML = "Ջնջել";
    deleteButton.className = "delete";

    // Ջնջելու գործողությունը
    deleteButton.onclick = function(event) {
        event.stopPropagation();
        item.remove();
    };

    // Կոճակը ավելացնում ենք ապրանքի մեջ
    item.appendChild(deleteButton);

    // Ապրանքը ավելացնում ենք ցուցակի մեջ
    list.appendChild(item);

    // Մաքրում ենք input-ը
    input.value = "";
};


// Մաքրել ամբողջ ցուցակը
clearButton.onclick = function() {
    list.innerHTML = "";
};