
var numero1 = 5;
var numero2 = 2;

const operacion = ["SUMA", "RESTA", "MULT", "DIV"];
// 1- Suma, 2- Resta, 3- Multiplicacion,  4- Division
var numOperacion = 4;

document.write(calculadora(numero1, numero2, operacion[numOperacion-1]));

function calculadora(num1, num2, operador){
    switch(operador){
        case "SUMA":
            return sumar(num1, num2);
            break;
        case "RESTA":
            return restar(num1, num2);
            break;
        case "MULT":
            return multiplicar(num1, num2);
            break;
        case "DIV":
            return dividir(num1, num2);
            break;
        default:
            return "Valor de operador no valido.";
            break;
    }
}

function sumar(num1, num2){
    return num1+num2;
}

function restar(num1, num2){
    return num1-num2;
}

function multiplicar(num1, num2){
    return num1*num2;
}

function dividir(num1, num2){
    if(num2 != 0)
        return num1/num2;
    else
        return "El denominador no puede ser 0.";
}