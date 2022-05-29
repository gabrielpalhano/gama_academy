class matematica {

    soma (valorA, valorB) {
        return valorA + valorB;
    }

    subtracao (valorA, valorB) {
        return valorA - valorB;
    }
}

var instMatematica = new matematica();

var resultado = instMatematica.soma(6, 7);
    console.log(resultado);