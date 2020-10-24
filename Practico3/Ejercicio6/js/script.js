var n1 = prompt("Ingrese una palabra: ");
var vocales = ["a", "e", "i", "o", "u"];

for (let index = 0; index < n1.length; index++) {
    for (let key in vocales) {

        if(n1[index].toLowerCase() == vocales[key])
            document.write(n1[index]);
    }
}
