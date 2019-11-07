const model = require("../model/contatos");

const getAll = (request, response) => {
  console.log(request.url);
  response.status(200).send(model.agenda);
};

// const getById = (request, response) => {
//   const id = request.params.id;
//   response.status(200).send(contatos.find(tarefa => tarefa.id == id));
// };


const postAdd = (request,response) => {

let contato = request.body
contato.id = Math.random().toString(36).substr(-8)
console.log(contato)
model.agenda.contatos.push(contato)
//console.log(request.body.nome)
// model.agenda.contatos.push(request.body)
//console.log(request.body)
response.status(200).send()
//model.agenda.contatos.push(contato)
}


module.exports = {
  getAll,
  //getById,
  postAdd
}

