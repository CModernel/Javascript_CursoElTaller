var n1 = parseInt(prompt("Ingrese un numero: "));

for (let index = 1; index <= n1; index+=2) {
    document.write(index);
    if(n1 - index - 1 > 0)
        document.write(", ");
}