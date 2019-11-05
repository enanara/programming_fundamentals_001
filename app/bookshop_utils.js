function addVAT(price) {
    return price + (0.2 * price);
}

function getFullName (firstName, lastName) {
    return firstName + " "+ lastName;
}

function makeHalfPrice (price){
    return price*0.5;
}

function countBooks (books){
    return books.length;
}

function isInStock (product){
    return product.quantity>=1;
}

function getTotalOrderPrice (price, quantity){
    var total = price*quantity;
    return addVAT(total);
}

module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice,
    countBooks,
    isInStock,
    getTotalOrderPrice
};