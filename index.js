var customerName = "bob";


//although writing return customerName.toUpperCase() will work,
// the test requires us to MODIFY the customerName. So that when
//it runs upperCaseCustomerName() it will change bob to BOB.
//you have to use customerName as the variable and have it assigned
//to a code that uppercases it.
function upperCaseCustomerName(){
    return customerName = customerName.toUpperCase()
}

var bestCustomer;
function setBestCustomer(){
    return bestCustomer = 'not bob'
}

function overwriteBestCustomer(){
    return bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'some value';
function changeLeastFavoriteCustomer(){
    return leastFavoriteCustomer = 'another value'

}