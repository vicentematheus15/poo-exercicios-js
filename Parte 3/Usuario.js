class Usuario {
    #senha
    #email

    setSenha(novaSenha){
        if (novaSenha.length >= 6){
            console.log(`Senha autenticada com sucesso!`)
        }else{
            console.log(`A senha deve ter 6 ou mais caracteres!`)
        }
    }

    autenticar(senhaInformada){
        
    }
}

const usuario1 = new Usuario();
usuario1.setSenha("1234567");
