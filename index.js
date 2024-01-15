let jogador = "Player"
let vitorias = 106
let derrotas = 5
let resultado = calcularpartidas(106, 5)

function calcularpartidas(vitorias, derrotas){
    let subtrair = vitorias - derrotas
    return subtrair
}
    if (vitorias <= 10) {
        nivel = "ferro"
      } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze"
      } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata"
      } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro"
      } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante"
      } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário"
      } else (vitorias >=101);{
        nivel = "Imortal"
      }

console.log("O Herói", (jogador), "tem de saldo de", (resultado), "está no nivel de", (nivel))