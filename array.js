const prompt = require('prompt-sync')();

const array = ['leonardo', 'rodrigo', 'gian'];
const nota = [];

for (let i = 0; i < array.length; i++) {
    nota[i] = prompt(`digite a primeira nota do ${array[i]}`);
}

console.log(nota);


const arrayNota = array.map((alunoAtual,i) => {
        return {
            nome: alunoAtual,
            nota: nota[i]
        }
})


const comparNota = arrayNota.filter((alunoAtual) => {
    if (alunoAtual.nota >= 6) {
        return alunoAtual;
    }
})

console.log(arrayNota);
console.log(comparNota);