class Funcionario {
    constructor(nome, salario){
        this.nome = nome
    }
    calcularSalario(){

    }
}

class FuncionarioHorista extends Funcionario {
    constructor(nome, horasTrabalhadas, valorHora){
        super(nome);
        this.horasTrabalhadas = horasTrabalhadas;
        this.valorHora = valorHora;
    }
    calcularSalario(){
        return this.horasTrabalhadas * this.valorHora
    }
}

class FuncionarioAssalariado extends Funcionario {
    constructor(nome, salarioMensal){
        super(nome);
        this.salarioMensal = salarioMensal;
    }
    calcularSalario(){
        return this.salarioMensal
    }

}