//Código del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
};

console.groupEnd();


//Código del triángulo
console.group("Triángulo");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
};

function areaTriangulo(base, altura){
    return (base * altura) / 2;
};

console.groupEnd();


//Código del círculo
console.group("Círculo");

function diametroCirculo(radio){
    return radio *2
};

const PI = Math.PI;
console.log("PI es: " + PI);

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
};

function areaCirculo(radio){
    return (radio * radio) * PI;
}
console.groupEnd();


//Interactuamos con HTML

//Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}


//Triangulo
function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById("Lado1");
    const lado2 = document.getElementById("Lado2");
    const base = document.getElementById("Base");

    const valorLado1 = parseFloat(lado1.value);
    const valorLado2 = parseFloat(lado2.value);
    const valorBase = parseFloat(base.value);

    const perimetro = perimetroTriangulo(valorLado1, valorLado2, valorBase);
    alert(perimetro)
}
function calcularAreaTriangulo() {
    const base = document.getElementById("Base");
    const altura = document.getElementById("Altura");

    const valorBase = parseFloat(base.value);
    const valorAltura = parseFloat(altura.value);

    const area = areaTriangulo(valorBase, valorAltura);
    alert(area);
}


//Circulo
function calcularPerimetroCirculo() {
    const radio = document.getElementById("RadioCirculo");
    const valorRadio = parseFloat(radio.value);

    const perimetro = perimetroCirculo(valorRadio);
    alert(perimetro);
}
function calcularAreaCirculo() {
    const radio = document.getElementById("RadioCirculo");
    const valorRadio = parseFloat(radio.value);

    const area = areaCirculo(valorRadio);
    alert(area);
}