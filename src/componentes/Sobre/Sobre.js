import React from 'react';
import './Sobre.scss';
import karen from '../imagem/karen.jpeg';
import Thiago from '../imagem/thiagoooo.jpeg';
import Julio from '../imagem/julio3.jpeg';
import Douglas from '../imagem/Douglas.jpeg';
import Natyele from '../imagem/Natyele.jpeg';
import log from '../imagem/linkedin.png'
import {Link} from 'react-router-dom';

const Sobre = () => {
    return(
        <div className="Tudo">
            <h1>Sobre o nosso projeto!</h1>
            <p>Na cidade de Caieiras a população obtinha em certo nível de  dificuldades para realizar inscrições nas atividades oferecidos pela Prefeitura Municipal de Caieiras ,para isso criamos a plataforma digital <span className="Negrito">DESCOMPLICA</span>.<p/>
            No <span className="Negrito">DESCOMPLICA</span> o usuário consegue realizar a sua inscrição nos cursos disponíveis virtualmente. 
            </p>

            <h2>DESENVOLVEDORES:</h2>
        
        <div className="Icones">
           <span>
                <img src={karen} alt={karen}/>
                <div className="alinhar">
                    <a href=""><img className="linkedin" src={log} alt="linkedin"/></a>
                    <p className="nomes">Karen Nunes</p>

                </div>
            </span>

           <span>
                <img src={Thiago} alt={Thiago}/>
                <div className="alinhar">
                    <a href="https://www.linkedin.com/in/thiago-mendes-174190193"><img className="linkedin"src={log} alt="linkedin"/></a>
                    <p className="nomes">Thiago Mendes</p>

                </div>
            </span>
           
           <span>
                <img src={Julio} alt={Julio}/>
                <div className="alinhar">
                    <a href="https://www.linkedin.com/in/julio-marques-0a7a31197/"><img className="linkedin" src={log} alt="linkedin"/></a>
                    <p className="nomes">Julio Cesar</p>
                </div>
            </span>
           
           <span>
                <img src={Douglas} alt={Douglas}/>
                <div className="alinhar">
                    <a href="https://www.linkedin.com/in/douglas-klemes-514a90192/"><img className="linkedin" src={log} alt="linkedin"/></a>
                    <p  className="nomes">Douglas Klemes</p>
                    
                </div>
            </span>
           
           <span>
                <img src={Natyele} alt={Natyele}/>
                <div className="alinhar">
                    <a href="https://www.linkedin.com/in/natyele-bertolani-4a6a31197/"><img className="linkedin" src={log} alt="linkedin"/></a>
                    <p  className="nomes">Natyele Bertolani</p>

                </div>
            </span>

        </div>

        </div>
    );
}

export default Sobre;