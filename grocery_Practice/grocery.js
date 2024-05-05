let grocery_1;
let grocery_2;
let grocery_3;

function calculatePrice(){
    grocery_1 = parseFloat(document.getElementById('price1').value);
    grocery_2 = parseFloat(document.getElementById('price2').value);
    grocery_3 = parseFloat(document.getElementById('price3').value);

    let total = grocery_1 + grocery_2 + grocery_3;

    document.getElementById('result').innerText = `The total amount is: ${total}`;
}