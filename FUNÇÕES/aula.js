function nomeDiga(nome) {
    console.log('Diga ' + nome);
}

nomeDiga('jpsa');

function quadrado(valor) {
    return valor * valor;
}
quadrado(10);
console.log(quadrado);

console.log(quadrado(2)+quadrado(2));

quadradoNumber = quadrado(10);
console.log(quadradoNumber);

function incrementarJuros(valor, juros) {
    const valorJuros = (juros/100) * valor;
    return valor + valorJuros;
}

console.log(incrementarJuros(10, 3));
console.log(incrementarJuros(10, 5));
