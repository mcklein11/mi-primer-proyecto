"user strict"
window.addEventListener("load", () => {
  
  var div_usuario=document.querySelector('#usuarios');
    function getusuarios() {
    return fetch('https://reqres.in/api/users?page=2');
  }
  getusuarios().then(function (data) {
    return data.json();
  }).then(users=>{
console.log(users.data);
listadodeusuarios(users,data);
  });
  function listadodeusuarios(usuarios) {
    usuarios.map((user,i)=>{
let nombre= document.createElement('h3');
nombre.innerHTML= i+'-'+user.first_name+'-'+ user.last_name;

div_usuario.appendChild(nombre);
});
  }
});
  





















