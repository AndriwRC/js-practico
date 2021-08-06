// Calcular la altura de un triángulo isósceles
function calcularAlturaTriangulo(lado, base) {
    const altura = Math.sqrt((lado ** 2) - ((base/2) ** 2));
    return altura;
}
function trianguloIsosceles(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3) {
        return("No es un triángulo isosceles, es un triángulo equilatero!")
    }else if (lado1 == lado2) {
        const altura = calcularAlturaTriangulo(lado1, lado3);
        return(altura);
    } else if(lado1 == lado3) {
        const altura = calcularAlturaTriangulo(lado1, lado2);
        return(altura);
    } else if(lado2 == lado3) {
        const altura = calcularAlturaTriangulo(lado2, lado1);
        return(altura);
    } else {
        return("No es un triángulo isosceles!");
    }
}
function alturaTrianguloIsosceles() {
    const lado1 = document.getElementById("Lado1");
    const lado2 = document.getElementById("Lado2");
    const lado3 = document.getElementById("Lado3");

    const valorLado1 = lado1.value;
    const valorLado2 = lado2.value;
    const valorLado3 = lado3.value;

    alert(trianguloIsosceles(valorLado1, valorLado2, valorLado3));
}