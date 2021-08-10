/*
- Lista de numeros > 0
- Producto de los elementos
- Raiz n-esima del producto
*/ 

const lista1 = [
    1,
    2,
    3,
    4,
    1,
    2,
    3,
    1,
    2,
    2,
];

// function multiplicacion(lista) {
//     let producto = 1;
//     for(i = 0; i < lista.length; i++){
//         producto = producto * lista[i];
//     }
//     return producto;
// };
// const producto = multiplicacion(lista1);

function calcularMediaGeometrica(lista) {
    const producto = lista.reduce(
        function (productoAcumulado, siguienteElemento){
            return productoAcumulado * siguienteElemento;
        }
    )
    
    const mediaGeometrica = producto ** (1/lista.length);
    return mediaGeometrica;
}