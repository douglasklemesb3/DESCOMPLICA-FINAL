import React from 'react';
import './Sobre.scss';
import karen from '../imagem/karen.jpeg';
import Thiago from '../imagem/thiagoooo.jpeg';
import Julio from '../imagem/julio3.jpeg';
import Douglas from '../imagem/Douglas.jpeg';
import Natyele from '../imagem/Natyele.jpeg';
import log from '../imagem/linkedin.png'

const Sobre = () => {
    return(
        <div className="Tudo">
            <h1>Sobre o nosso projeto!</h1>
            <p>Na cidade de Caieiras a população obtinha em certo nível de  dificuldades para realizar inscrições nas atividades oferecidos pela Prefeitura Municipal de Caieiras ,para isso criamos a plataforma digital <span className="Negrito">DESCOMPLICA</span>.<p/>
            No <span className="Negrito">DESCOMPLICA</span> o usuário consegue realizar a sua inscrição nos cursos disponíveis virtualmente. 
            </p>

            <h2>DESENVOLVEDORES:</h2>
        
        <div className="Icones">
           <span> <img src={karen} alt={karen}/><p className="nomes">Karen Nunes</p></span>
           <span> <img src={Thiago} alt={Thiago}/><p className="nomes">Thiago Mendes</p></span>
           <span> <img src={Julio} alt={Julio}/><p className="nomes">Julio Cesar</p></span>
           <span> <img src={Douglas} alt={Douglas}/><p  className="nomes">Douglas Klemes</p></span>
           <span> <img src={Natyele} alt={Natyele}/><p  className="nomes">Natyele Bertolani</p></span>

        </div>

        </div>
    );
}

export default Sobre;