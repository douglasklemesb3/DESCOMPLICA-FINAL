import React from 'react';
import './Home.scss';

import face from '../imagem/facebook (1).png';
import inst from '../imagem/instagram.png';
import you from '../imagem/youtube.png';


const Home= () =>{
    return(

        <footer>
            <div className="icone">
                <a href="https://www.facebook.com/prefeituradecaieiras/"><img src={face} alt="icone"/></a>
                <a href="https://www.instagram.com/prefeituradecaieiras/?hl=en"><img src={inst} alt="icone"/></a>
                <a href="https://www.youtube.com/channel/UC8HmvPNj3KIQFUZgWdfxcDQ"><img src={you} alt="icone"/></a>
            </div>
        </footer>
       
    )
}

export default Home;