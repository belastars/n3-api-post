const model = require("../model/contatos");


const getAll = (request, response) => {
  console.log(request.url);
  response.status(200).send(model.agenda);
};

// const getById = (request, response) => {
//   const id = request.params.id;
//   response.status(200).send(contatos.find(tarefa => tarefa.id == id));
// };


const pushAdd = (request,response) => {
     const contato =request.body;
     contato.id = Math.random().toString(36).substr(-8)
     let contatoExistente = model.agenda.contatos.find(item => item.nome == contato.nome)
      
     console.log(contatoExistente)
     
     if(contatoExistente){
        response.status(400).send("Este contato já existe!")
      } else{
        model.agenda.contatos.push(contato)
        response.status(201).send("Contato cadastrado com Sucesso")
      }
     
}


module.exports = {
  getAll,
  pushAdd

}

