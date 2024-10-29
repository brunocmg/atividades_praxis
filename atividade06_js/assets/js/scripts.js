let alunosMaiorDeIdade = []
let alunosMenorDeIdade = []

// função para cadastro de alunos, separando-os pela maioridade
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

// função para exibir alunos maiores de idade no console do navegador
function exibirAlunosMaiorDeIdade() {
    console.log("Alunos Maiores de Idade: ", alunosMaiorDeIdade);
}

// função para exibir alunos menores de idade no console do navegador
function exibirAlunosMenorDeIdade() {
    console.log("Alunos Menores de Idade: ", alunosMenorDeIdade);
}

// função para abriar a caixa de cadastro
function abrirCadastro() {
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

abrirCadastro()