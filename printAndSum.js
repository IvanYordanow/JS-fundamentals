function printAndSum(num1 , num2) {
    let sum = 0;
    let num = "";
    while(num1 <= num2) {
    
    num += `${num1} `;
    sum = sum + num1;
    num1++;
    }
    console.log(num);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);