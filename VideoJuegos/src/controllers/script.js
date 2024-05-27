import Game from "../models/Game.js";
import { bst } from "./dependencies.js";

//botones
let addBtn = document.getElementById("guardarBtn")
let buscarBtn = document.getElementById("buscarBtn")
let buscarMin = document.getElementById("buscar_minBtn")
let buscarMax = document.getElementById("buscar_maxBtn")
let imprimir = document.getElementById("imprimirBtn")
let volver = document.getElementById("regresarBtn")

let info = document.getElementById("data")
//inputs



//metodos para que funcione la logica.....
addBtn.addEventListener("click", () => {
    let tituloTxt = document.getElementById("tituloTxt").value
    let generoTxt = document.getElementById("generoTxt").value
    let plataformaTxt = document.getElementById("plataformaTxt").value
    
    let videojuego = new Game(tituloTxt, generoTxt, plataformaTxt)
    let confirm = bst.add_init(videojuego)

    if(confirm){
        Swal.fire({
            title: "Exito",
            text: "Videojuego agregado",
            icon: "success"
        });
    }  
    document.getElementById("tituloTxt").value = ""
    document.getElementById("generoTxt").value = ""
    document.getElementById("plataformaTxt").value = ""
})
buscarBtn.addEventListener("click", () => {
    let buscarTxt = document.getElementById("searchTxt").value
    
    let confirm = bst.search_init(buscarTxt)

    if(confirm){
        Swal.fire({
            title: "Videojuego encontrado",
            text: "Titulo: " + confirm.tittle + "\nGenero: " + confirm.gender + "\nPlataforma: " + confirm.platform,
            icon: "info"
        })
    }
    else{
        Swal.fire({
            title: "Videojuego NO encontrado",
            text: "No se encontro el videojuego",
            icon: "error"
        })
    }
})

buscarMin.addEventListener("click", () =>{
    let confirm = bst.findMin_init()

    if(confirm){
        Swal.fire({
            title: "Videojuego encontrado",
            text: "Titulo: " + confirm.tittle + "\nGenero: " + confirm.gender + "\nPlataforma: " + confirm.platform,
            icon: "info"
        })
    }
    else{
        Swal.fire({
            title: "Videojuego NO encontrado",
            text: "No se encontro el videojuego",
            icon: "error"
        })
    }
})
buscarMax.addEventListener("click",() => {
    let confirm = bst.findMax_init()

    if(confirm){
        Swal.fire({
            title: "Videojuego encontrado",
            text: "Titulo: " + confirm.tittle + "\nGenero: " + confirm.gender + "\nPlataforma: " + confirm.platform,
            icon: "info"
        })
    }
    else{
        Swal.fire({
            title: "Videojuego NO encontrado",
            text: "No se encontro el videojuego",
            icon: "error"
        })
    }
})
imprimir.addEventListener("click", ()=>{
    document.querySelector('.scene').classList.add('flipped');
    bst.route_init(game => {
        info.innerHTML = "";

        bst.route_init(game => {
            let data = document.createElement('li');
            data.textContent = `Titulo: ${game.tittle}, Genero: ${game.gender}, Plataforma: ${game.platform}`;
            info.appendChild(data);
        });
    });
})

volver.addEventListener("click",()=>{
    document.querySelector('.scene').classList.remove('flipped');
})
