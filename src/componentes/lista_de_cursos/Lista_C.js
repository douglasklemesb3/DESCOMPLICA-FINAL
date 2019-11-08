import React from "react"
import './Lista_C.scss'
import ing from '../imagem/ingles.jpeg'
import comp from '../imagem/computador.jpeg'
import log from '../imagem/logistica.jpeg'
import adm from '../imagem/adm.jpg'
import lb from '../imagem/libras.jpg'
import ds from '../imagem/desenho.jpg'

import Lista from "./lista";

const ListaC = () =>{
    return(
    <div className="imagem">
 

    <Lista titulo="Inglês" imagem={ing} descricao="Curso de inglês gratuito com duração de 1 ano contendo um diploma após a finalização do mesmo." local ="Local: Avenida dos Estudantes    n°360     Centro de Caieiras "/>
    <Lista titulo="Computação" imagem={comp} descricao="Curso de computação gratuito com duração de 6 meses contendo um diploma após a finalização do mesmo." local ="Local: Rua Caminho Cluadio Manoel da Costa   s/n     Laranjeiras "/>
    <Lista titulo="Logística" imagem={log} descricao="Curso de logistica gratuito com duração de 2 anos contendo um diploma após a finalização do mesmo."local ="Local: Avenida Professor Carvalho Pinto    n°207     Centro de Caieiras "/>
    <Lista titulo="Administração" imagem={adm} descricao="Curso de admistração gratuito com duração de 1 anos e 6 meses contendo um diploma após a finalização do mesmo."local ="Local: Avenida Professor Carvalho Pinto    n°207     Centro de Caieiras "/>
    <Lista titulo="Libras" imagem={lb} descricao="Curso de libras gratuito com duração de 6 meses contendo um diploma após a finalização do mesmo."local ="Local: Avenida Marcelino Bressiani    n°178     Caieiras "/>
    <Lista titulo="Desenho" imagem={ds} descricao="Curso de desenho gratuito com duração de 6 meses   contendo um diploma após a finalização do mesmo."local ="Local: Rua Argentina   n°400     Jardim Santo Antonio       Caieiras "/>


    </div>      
    )
    }

export default ListaC;