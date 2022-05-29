var achou = false;
var tabuada = 7;
var repeticoes = 10;
var numSort = 10;
var possivelValor = 0;

while (!achou) {
    possivelValor += 1;
    if (numSort === possivelValor) {
        achou = true
        console.log("numero sorteado é igual a " + possivelValor);
    } else {
        console.log("possivel valor não corresponde ao número sorteado " + possivelValor);
    }
}