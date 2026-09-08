
const Inome = document.querySelector("#nome")
const Isenha = document.querySelector("#senha")
const formulario = document.querySelector("#form")

formulario.addEventListener(
        'submit', cadastrar
    )
async function cadastrar(evento){
        evento.preventDefault()
        const dados = {
            nome: Inome.value,
            senha: Isenha.value
        }

        
        try{
            //tenta fazer algo
            const response =
            await fetch(
                "http://localhost:8080/usuario",
                {
                    method: "POST",
                    headers:{
                        "Accept" : "application/json",
                        "Content-type" : "application//json"
                    },
                    body: JSON.stringify(dados) 
                }
            )
            if(!response.ok){
                throw new Error("Não foi possivel cadastrar!")
            }

        }catch (error){
            // se não consiguir, lança o erro aqui
            console.log("Erro no cadastro: " + error)
        }
    }