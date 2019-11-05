import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.scss"
import desc from "../imagem/nat-logo.png";

const NavBar = () => {
    const [menuAtivo, setMenuAtivo] = useState(false);

    const AbrirMenu = () => {
        setMenuAtivo(!menuAtivo);
    };

    const FecharMenu = () =>{
        setMenuAtivo(false)
    }
   

    return (
     <div className="NavBar">
            <nav>
                
             <div className="ancora">
                


                <Link onClick={FecharMenu} to='/'>HOME</Link>
                <Link onClick={FecharMenu} to="/cursos"> CURSOS</Link>
                <Link onClick={FecharMenu} to="/entretenimentos">ENTRETENIMENTOS</Link>
                <Link onClick={FecharMenu} to="/sobre">SOBRE</Link>



                </div>
                
                <div onClick={AbrirMenu} id="menu-hamburguer">
                    <span className={`${menuAtivo ? "virarX1" : ""}`}></span>
                    <span className={`${menuAtivo ? "sumirIgualTiro" : ""}`}></span>
                    <span className={`${menuAtivo ? "virarX2" : ""}`}></span>
                </div>
                <div className='Imag'>
                <img src={desc}/>
                </div>
            </nav>
            <section className={`menu ${menuAtivo ? "ativo" : ""}`}>
                
                <Link onClick={FecharMenu} to='/'>HOME</Link>
                <Link onClick={FecharMenu} to="/cursos"> CURSOS</Link>
                <Link onClick={FecharMenu} to="/entretenimentos">ENTRETENIMENTOS</Link>
                <Link onClick={FecharMenu} to="/sobre">SOBRE</Link>
            </section>
        </div>
    );
}
export default NavBar;
