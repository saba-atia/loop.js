let isPrime = true;
let num = ("Enter any number to check if it's prime or not :");
for (let i=2;i<num/2;i++){
    if (num % i===0){
        isPrime = false;
        break;
    }
}
if (isPrime){
    document . writeln(num+"  prime number");

}else {
    document .writeln(num + "  not prime number");
}