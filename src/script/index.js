"use strict"

import  projetos_Lading_Page from "./objetos.js";

const menu = window.document.getElementById("menu")
const links_menu = window.document.getElementById("links_menu")
const botao_form = window.document.getElementById("enviar")
const projetos = [...window.document.querySelectorAll(".portfolio > li")]
const todos_os_projetos = document.querySelector("#projetos")

//Menu Hamburg

//Projetos li
projetos.map((e,i)=>{
    e.addEventListener("click",()=>{

        if(i == 0){
            /* Landing pages*/
            //Tira cor e bota cor na lista de projetos 
            projetos[0].classList.add("corprojetos")
            projetos[1].classList.remove("corprojetos")
            projetos[2].classList.remove("corprojetos")
            projetos[3].classList.remove("corprojetos")

            todos_os_projetos.innerHTML = ""
            projetos_Lading_Page.map((e,i)=>{
            const article = document.createElement("article")
            article.setAttribute("class", "projeto")
            article.innerHTML = ` 
                                <div>
                                <h2> ${e.nome} </h2> 
                                <p> ${e.descricao} </p>

                                <div class ="btn"> 
                                <a href=" ${e.link}" target = "_blank">Veja o projeto</a>
                                </div>
                                </div>
                                
                                <div class ="image-projeto"> 
                                <img src = "${e.imagem}" alt = "${e.nome}"
                                </div>
                                `
            todos_os_projetos.appendChild(article)
            })     
        }else if(i==1){
            todos_os_projetos.innerHTML = ""
            projetos[1].classList.add("corprojetos")
            projetos[2].classList.remove("corprojetos")
            projetos[3].classList.remove("corprojetos")
            projetos[0].classList.remove("corprojetos")  
            window.alert("Em obras")
        }
     })
})






