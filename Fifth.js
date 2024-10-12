let numbers = 0
for(let i=1; i<=10; i++){
    numbers +=i
    if(i<10){
        numbers += ","
    }
}
console.log(numbers)