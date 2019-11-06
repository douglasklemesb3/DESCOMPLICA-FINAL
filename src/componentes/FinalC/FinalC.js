import React from 'react'
import lista from '../lista_de_cursos/lista.js'
import Lista from '../lista_de_entre/Lista.js';
import '../FinalC/FinalC.scss'
const FinalC = () => {

    let aleatorio = Math.floor(Math.random() * 10000);
    
    return (
    <div className="FinalC">
        <div className="texto">
            <h1>Parabéns!</h1>
            <div className="container">
                <p>Cadastro concluido!</p>

                <p>Seu número de inscrição é {aleatorio}</p>

                <p>Recomendaçoes:<br/>
                <br/>


                    Levar xerox dos seguintes documentos na primeira aula:<br/> <br/>
                      - RG;<br/>
                      - Comprovante de resideñcia;<br/>
                      - CPF<br/>
                </p>

            </div>
            
        </div>
    </div>
    )

}


export default FinalC