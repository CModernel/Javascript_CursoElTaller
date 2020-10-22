const pi = 3.14;
var radioM = 10;

// Convertir radio de metros a centimetros
var radioCM = radioM * 100;

var areaCirculo = Math.pow(radioCM, 2) * pi;

alert('Area del circulo de radio ' + radioM + '(M) es: ' + areaCirculo);