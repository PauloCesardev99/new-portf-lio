"use strict"

const menu = window.document.getElementById("menu")
const links_menu = window.document.getElementById("links_menu")
const botao_form = window.document.getElementById("enviar")
const projetos = [...window.document.querySelectorAll(".portfolio > li")]
const todos_os_projetos = document.querySelector("#projetos")

//Menu Hamburg

//Projetos

projetos.map((e,i)=>{

    e.addEventListener("click",()=>{

       


        if(i == 0){

            projetos[0].classList.add("corprojetos")
            projetos[1].classList.remove("corprojetos")
            projetos[2].classList.remove("corprojetos")
            projetos[3].classList.remove("corprojetos")
            

            todos_os_projetos.innerHTML =""
            todos_os_projetos.innerHTML =` <article class="projeto">

            <div>
                <h2>CODE CAFÉ</h2>

                <p>A cafeteria Code café é uma empresa familiar que oferece uma variedade de alimentos e bebidas para seus clientes. A cafeteria está localizada em uma área movimentada da cidade e é popular entre os moradores locais e turistas. A cafeteria oferece um ambiente aconchegante e amigável, e os funcionários são sempre prestativos e atenciosos.</p>

                <div class="btn">
                   <a href="https://paulocesardev99.github.io/cafe/" target="_blank">Veja o Projeto</a> 
                </div>
                
            </div>

            <div class="image-projeto">
                <img src="src/img/projetos/code-café.webp "alt="Code-Café">
            </div>


        </article>


        
        <article class="projeto">


            <div>
                <h2>RIRO TECH ADVOGACIA</h2>

                <p> renomada firma de advocacia Riro Tech destaca-se no cenário jurídico por sua abordagem inovadora e especializada no campo da tecnologia. Com uma equipe de advogados altamente qualificados e apaixonados por desafios tecnológicos, a Riro Tech oferece serviços jurídicos sob medida para empresas do setor de tecnologia. </p>

                <div class="btn">
                   <a href="https://paulocesardev99.github.io/advocacia-riro-tech/" target="_blank">Veja o Projeto</a> 
                </div>
                
            </div>

            <div class="image-projeto">
                <img src="src/img/projetos/Adovacia-Riro-Tech.webp" alt="advocacia-riro-tech">
            </div>


        </article>`
        }
         else if(i==1){
            projetos[1].classList.add("corprojetos")
            projetos[2].classList.remove("corprojetos")
            projetos[3].classList.remove("corprojetos")
            projetos[0].classList.remove("corprojetos")

            todos_os_projetos.innerHTML ="";

           const article = document.createElement("article")

           article.setAttribute("class", "projeto")
           
           article.innerHTML = `<div>
           <h2>Obras</h2>

           <p>Obras</p>

           <div class="btn">
              <a href="#" target="_blank">Obras!!</a> 
           </div>
           
       </div>

       <div class="image-projeto">
           <img src=""alt="Obras">
       </div>
            `
        todos_os_projetos.appendChild(article)
       
        }


     })
})






