function maxNumbers(num1, num2) {
    if (num1 > num2){
        console.log(num1 + " es mayor que " + num2);
    }
    else{
        console.log(num2 + " es mayor que " + num1);
    }    
}

// encuentra la palabra mas larga    

var Words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

var maxlength = 0;
var maxWord = "";

Words.forEach(function(element){
    if (element.length > maxlength){
        maxlength = element.length;
        maxWord = element;
    }
});

console.log(maxlength, maxWord);

// ejer 3 suma de numeros

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sum(arrayNum) {
    var total = 0;
    arrayNum.forEach(function(element){
        total += element;
        console.log(total);
    });
}
sum(numbers);
