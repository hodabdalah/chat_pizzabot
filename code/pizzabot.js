const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:

// Welcome
alert(`Hey! Happy to serve your pizza. On our menu we have:\n ${vegetarian} , ${hawaiian} and ${pepperoni}`)

// check the valid name
let orderName =  prompt('Enter the name of the pizza you want to order today.');
function checkOrderName (orderName){
    if (orderName === vegetarian || orderName ===hawaiian || orderName ===pepperoni ) {
    return true
    }else{
        return false
    }
}

// Calculate the total cost
function totalCost(orderQuantity){
    return orderQuantity * pizzaPrice
    }
let orderQuantity;


// Cocking time 
function cookingTime(orderQuantity) {
    let time;

    if (orderQuantity <= 2) {
        time = 10;
    } else if (orderQuantity <= 5) {
        time = 15;
    } else {
        time = 20;
    }
    alert( `Great, I'll get started on your ${orderName} right away, it will cost ${totalCost(orderQuantity)} kr. The pizzas will take ${time} minutes.`);
}

if (checkOrderName(orderName) ) {
    orderQuantity = prompt(`How many of ${orderName} do you want?`);
    totalCost(orderQuantity)
    cookingTime(orderQuantity)
    console.log(orderName,orderQuantity)
}else{
    alert("Sorry, we couldn't find any pizza with the requested name")
}



