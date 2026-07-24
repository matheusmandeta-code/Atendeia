const formulario=document.querySelector("#formulario");

const entrada=document.querySelector("#entrada");

const mensagens=document.querySelector("#mensagens");

formulario.addEventListener("submit",function(e){

e.preventDefault();

const texto=entrada.value;

if(texto=="") return;

const usuario=document.createElement("div");

usuario.className="usuario";

usuario.innerText=texto;

mensagens.appendChild(usuario);

entrada.value="";

setTimeout(function(){

const ia=document.createElement("div");

ia.className="ia";

ia.innerText="Você escreveu: "+texto;

mensagens.appendChild(ia);

mensagens.scrollTop=mensagens.scrollHeight;

},700);

});
