var n1 = parseInt(prompt("Ingrese un numero: "));

for (let index = 1; index <= n1; index++) {
    document.write(index);
    if(index != n1)
        document.write(", ");
}