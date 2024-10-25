let alunosMaiorDeIdade = []
let alunosMenorDeIdade = []

function cadastroDeAluno() {
    const nome = prompt("Qual seu nome?")
    const idade = parseInt(prompt("Qual sua idade?"))

    let novoAluno = {nome: nome, idade: idade, maioridade: idade>= 18}

    if(idade < 18) {
        alunosMenorDeIdade.push(novoAluno)
    } 
    else {
        alunosMaiorDeIdade.push(novoAluno)
    }
}

function exibirAlunosMaiorDeIdade() {
    console.log("Alunos Maiores de Idade: ", alunosMaiorDeIdade);
}

function exibirAlunosMenorDeIdade() {
    console.log("Alunos Menores de Idade: ", alunosMenorDeIdade);
}

function reabrirCadastro() {
    let acao = ""

    while(acao != "4") {
        acao = prompt("1. Cadastrar Aluno\n2. Exibir lista de alunos maiores de idade\n3. Exibir lista de alunos menores de idade\n4. Encerrar cadastros")
        if(acao == "1") {
             cadastroDeAluno()
        }
        else if (acao == "2") {
            exibirAlunosMaiorDeIdade()
        }
        else if (acao == "3") {
            exibirAlunosMenorDeIdade()
        }
}


}