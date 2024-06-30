function factorial(num){
    let mul = 1;
    let i = 1;
    while(i <= num){
        mul *= i;
        i++;
    }
    return mul;
}

let multiplication = factorial(5);
console.log(multiplication);




// factorial of any number in decrement loop
function factorial(num){
    let mul = 1;
    let i = num;
    while(i >= 1){
        mul *= i;
        i--;
    }
    return mul;
}

let multiplication2 = factorial(7);
console.log(multiplication2);