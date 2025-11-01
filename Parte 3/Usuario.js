class Usuario {
    #senha
    #email

    setSenha(novaSenha){
        if (novaSenha.length >= 6){
            this.#senha = novaSenha
            console.log(`Senha autenticada com sucesso!`)
        }else{
            console.log(`A senha deve ter 6 ou mais caracteres!`)
        }
    }

    autenticar(senhaInformada){
        if (senhaInformada === "1234567"){
            console.log("Entrada autorizada!")
        }else{
            console.log("Senha e/ou email incorretos")
        }
    }
}

const usuario1 = new Usuario();
usuario1.setSenha("1234567");
usuario1.autenticar("123456")
