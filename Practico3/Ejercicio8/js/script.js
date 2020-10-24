var n1 = parseInt(prompt("Ingrese un numero: "));

for (let index = n1; index > 0; index--) {
    // Es divisible
    if(n1%index == 0)
        document.writeln(index);
}