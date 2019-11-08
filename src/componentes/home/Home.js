import React from 'react';
import './Home.scss';

import face from '../imagem/facebook (3).png';
import inst from '../imagem/instagram (2).png';
import you from '../imagem/youtube (1).png';
import text from '../imagem/nat-correto-gif.gif'
const Home= () =>{
    return(
        <div>
        <article className="gif">
            <img src={text}/>

   
        
        </article>

        <footer>
            <div className="icone">
                <a href="https://www.facebook.com/prefeituradecaieiras/"><img src={face} alt="icone"/></a>
                <a href="https://www.instagram.com/prefeituradecaieiras/?hl=en"><img src={inst} alt="icone"/></a>
                <a href="https://www.youtube.com/channel/UC8HmvPNj3KIQFUZgWdfxcDQ"><img src={you} alt="icone"/></a>
            </div>

        </footer>
       </div>
    )
}

export default Home;