// AOS.init({
//     offset:1
// });

//Se le indica al programa que cuando la pantalla sea de un celular y se le de click al boton del menu cambie al estado activo
let links = document.querySelector('.links')

document.querySelector('.boton').addEventListener('click', function(){
    links.classList.toggle('active')
})