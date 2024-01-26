"use strict"

const projetos_Lading_Page = [];


class Projeto{

     nome;
     descricao;
     link;
     imagem;

    constructor(nome, descricao, link, imagem){

        this.nome = nome;
        this.descricao = descricao;
        this.link = link;
        this.imagem = imagem;
    }

}

const p_1 = new Projeto("CODE CAFÉ", "A cafeteria Code café é uma empresa familiar que oferece uma variedade de alimentos e bebidas para seus clientes. A cafeteria está localizada em uma área movimentada da cidade e é popular entre os moradores locais e turistas. A cafeteria oferece um ambiente aconchegante e amigável, e os funcionários são sempre prestativos e atenciosos.","https://paulocesardev99.github.io/cafe/", "src/img/projetos/code-café.webp")
const p_2 = new Projeto("RIRO TECH ADVOGACIA", "renomada firma de advocacia Riro Tech destaca-se no cenário jurídico por sua abordagem inovadora e especializada no campo da tecnologia. Com uma equipe de advogados altamente qualificados e apaixonados por desafios tecnológicos, a Riro Tech oferece serviços jurídicos sob medida para empresas do setor de tecnologia.", "https://paulocesardev99.github.io/advocacia-riro-tech/", "src/img/projetos/Adovacia-Riro-Tech.webp")

projetos_Lading_Page.push(p_1, p_2)


export default projetos_Lading_Page;


