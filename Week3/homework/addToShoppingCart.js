const shoppingCart =["bananas" , "milk","tea","chocolate","waffles"];
function addToShoppingCart(){
    var arrayLength = addToShoppingCart.length;
    const firstElement = shoppingCart.shift();
    for (var i = 0; i < arrayLength-2; i++) {
        console.log(firstElement[i]);
    };
    console.log("You bought"+" "+ shoppingCart.splice(0) + ","+"!");
}

addToShoppingCart("chocolate");
addToShoppingCart("waffles");
addToShoppingCart("tea");