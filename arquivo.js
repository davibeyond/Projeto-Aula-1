function fabricarPessoa(nomeDaPessoa, sobrenomeDaPessoa, dataDeNascimentoDaPessoa) {
    return {
        nome: nomeDaPessoa,
        sobrenome: sobrenomeDaPessoa,
        dataDeNascimento: dataDeNascimentoDaPessoa
    }
}

const pessoa1 = fabricarPessoa('Levi', 'Nobrega', 10)
const pessoa2 = fabricarPessoa('Davi', 'Moura', 20)
const pessoa3 = fabricarPessoa('Arthur', 'Lapprand', 30)
const pessoa4 = fabricarPessoa('Paulo', 'Filho', 15)
const pessoa5 = fabricarPessoa('Nathan', 'Martins', 25)
const pessoas = [pessoa1, pessoa2, pessoa3, pessoa4, pessoa5]

function lerPessoa(pessoa) {
    console.log("Dentro do for lemos", pessoa)
}
pessoas.forEach(lerPessoa)
console.log('Fim')