
fetch('https://dog.ceo/api/breeds/list/all')
    .then(res=>res.json())
    .then(json=>console.log(json))


fetch('https://dog.ceo/api/breeds/image/random')
    .then(res=>res.json())
    .then(json=>console.log(json))

fetch('https://dog.ceo/api/breed/mastiff/images')
            .then(res=>res.json())
            .then(json=>console.log(json))

            
function imgRaza (param) {
    fetch(`https://dog.ceo/api/breed/${param}/images`)
        .then(res=>res.json())
        .then(json=>console.log(json))
}

let pMain= document.createElement('main');
document.body.appendChild(pMain);
let perroImg = document.createElement('img');
pMain.appendChild(perroImg);
perroImg.src= 'https://images.dog.ceo/breeds/chihuahua/n02085620_3875.jpg'

//Ejercicio 2

//crear boton

//pMain esta definido en el ejercicio anteior

let contenedorUsuario= document.createElement('div');
contenedorUsuario.setAttribute('id','divcontenedor');
pMain.appendChild(contenedorUsuario);

//crear el textarea
let usuarioAbuscar= document.createElement('textarea');
usuarioAbuscar.setAttribute=('id', 'campoTexto');
let userName = usuarioAbuscar.value;
document.getElementById('campoTexto').value;
contenedorUsuario.appendChild(usuarioAbuscar);

//crear el boton
let botonBusqueda= document.createElement('button');
botonBusqueda.setAttribute('id','boton')
contenedorUsuario.appendChild(botonBusqueda);
Document.getElementById('boton').addEventListener('submit', (event) => console.log(event.target.value));


/*Estos son los tres valores que se supone que deberiamos imprimir

"name":
"public_repos": 43,
"avatar_url": */


let usuario =[];
fetch (`https://api.github.com/users/${userName}`)
    .then(data => data.json())
    .then ( users => {
            usuario = users.data;
            console.log(usuario);
;
    }) 


/* const message = document.getElementById('message');

// ✅ SET value of textarea
message.value = 'https://api.github.com/users/';

// ✅ Append to value of textarea
message.value += '';

// ✅ get value of textarea on change
message.addEventListener('input', function handleChange(event) {
  console.log(event.target.value);
});

 */





