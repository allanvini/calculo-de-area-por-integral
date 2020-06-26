let divisor = 10; // O numero de vezes qual dividiremos a curva para calcular a área (quanto maior o numero, melhor a precisão do resultado)

let X = retornaX(divisor);

let multiplicador = X[0];

let Y = retornaY(X);

let area = calculaArea(Y, multiplicador);


let apresentacao = {
    'equação': 'f(x) = √1-x²', //Aqui coloca a equação usada para ser apresentada no log
    'divisor': divisor,
    'area calculada': area
}

console.table(apresentacao);

function retornaX(divisor) {
    let X = []
    for (let count = 1; count <= divisor; count++) {
        X.push(count / divisor);
    }
    return X;
}

function retornaY(X) {
    let Y = [];
    
    for (Xn of X) {
         // *** Aqui dentro do push() vai a equação em questão ***
        Y.push(eval(`${Math.sqrt( 1 - Math.pow(Xn,2))}`)); // Equivalente a função => f(x) = √1-x²
    }
    return Y;
}

function calculaArea(Y, multiplicador) {
    let soma = 0;
    Y.forEach(Yn => {
        soma += Yn;
    });
    return (multiplicador * soma);
}
