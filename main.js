pizza_menu_array = []

function submit()
{


var pizza_1 = document.getElementById("pizza_1").value;
var pizza_2 = document.getElementById("pizza_2").value;
var pizza_3 = document.getElementById("pizza_3").value;
var pizza_4 = document.getElementById("pizza_4").value;

pizza.push(pizza_1);
pizza.push(pizza_2);
pizza.push(pizza_3);
pizza.push(pizza_4);

console.log(pizza_menu_array);

document.getElementById("display_pizza").innerHTML = pizza_menu_array; document.getElementById("menu_button").style.display = "none"; document.getElementById("sort_button").style.display = "inline-block"; } function sorting() { pizza_menu_array.sort(); console.log(pizza_menu_array); document.getElementById("display_pizza").innerHTML = pizza_menu_array; }