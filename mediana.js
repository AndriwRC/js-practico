// const lista1 = [
//     100,
//     200,
//     500,
//     4000000,
// ];

function calcularMediaAritemtica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

function esPar(numeroElementos) {
    if(numeroElementos % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function calcularMediana(lista) {
    const listaOrdenada = lista.sort((a,b) => a - b);

    const mitadLista = parseInt(listaOrdenada.length / 2);

    let mediana;

    if (esPar(listaOrdenada.length)) {
        const elemento1 = listaOrdenada[mitadLista];
        const elemento2 = listaOrdenada[mitadLista - 1];
        const promedioElemeto1y2 = calcularMediaAritemtica([
            elemento1,
            elemento2,
        ]);
        mediana = promedioElemeto1y2;
    } else {
        mediana = listaOrdenada[mitadLista];
    }

    return mediana;
}
