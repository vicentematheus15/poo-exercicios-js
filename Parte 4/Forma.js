class Forma {
    
    calcularArea(){

    }
}

class Quadrado extends Forma {
    constructor(base, altura){
        this.base = base;
        this.altura = altura;
    }
    calcularArea(){
        const area = this.base * this.altura
    }
}

class Retangulo extends Forma {
    constructor(base, altura){
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