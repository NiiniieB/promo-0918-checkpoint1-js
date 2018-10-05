function fibonacci(num){
    if (num > 1){
        return (fibonacci(num-1) + fibonacci(num-2));
    }
    if (num <=1){
        return 1;
    }
}
console.log(fibonacci(10));