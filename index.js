function calcularRanked(vitorias, derrotas) {
    const saldo = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    const mensagem = `O Herói tem um saldo de ${saldo} e está no nível de ${nivel}`;
    return mensagem;
}
const vitorias = 65;
const derrotas = 30;
const resultado = calcularRanked(vitorias, derrotas);
console.log(resultado);
