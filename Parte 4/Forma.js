class Forma {
    
    calcularArea(){

    }
}

class Quadrado extends Forma {
    constructor(lado){
        super()
        this.lado = lado;
    }
    calcularArea(){
        const area = this.lado * this.lado
    }
}

class Retangulo extends Forma {
    constructor(lado){
        super()
        this.lado = lado;
    }
    calcularArea(){
        const area = this.lado * this.lado
    }
    constructor(base, altura){
        super()
        this.base = base;
        this.altura = altura;
    }
    calcularArea(){
        const area = this.base * this.altura
    }
}

class Circulo extends Forma {

    calcularArea(){
        
    }
}

const formas = [
    new Quadrado(5, 5)
]