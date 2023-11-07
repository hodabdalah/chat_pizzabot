let submitButton = document.getElementById('submitBtn');
const pizzaPrice = 80;
submitButton.addEventListener("click", onSubmit);

function checkOrderName(orderName) {
    if (orderName === 'Vegetarian Pizza' || orderName === 'Hawaiian Pizza' || orderName === 'Pepperoni Pizza') {
        return true;
    } else {
        return false;
    }
}

// Calculate the total cost
function totalCost(orderQuantity) {
    return orderQuantity * pizzaPrice;
}

function cookingTime(orderQuantity) {
    let time;

    if (orderQuantity <= 2) {
        time = 10;
    } else if (orderQuantity <= 5) {
        time = 15;
    } else {
        time = 20;
    }

    return time;
}

function onSubmit(e) {
    e.preventDefault();
    let orderNameInput = document.getElementById('orderName');
    let orderQuantityInput = document.getElementById('orderQuantity');
    let successMessage = document.getElementById('successMessage');

    // Empty the successMessage
    successMessage.innerHTML = '';

    let orderName = orderNameInput.value;
    let orderQuantity = orderQuantityInput.value;

    if (checkOrderName(orderName)) {
        let time = cookingTime(orderQuantity);
        successMessage.innerHTML = `Great, I'll get started on your ${orderName} right away, it will cost ${totalCost(orderQuantity)} kr. The pizzas will take ${time} minutes.`;

        // Clear the input fields
        orderNameInput.value = '';
        orderQuantityInput.value = '';
    } else {
        successMessage.innerHTML = "Sorry, we couldn't find any pizza with the requested name.";
    }
}

