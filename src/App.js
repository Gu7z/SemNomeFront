import React, { useState, useEffect } from 'react';
import './App.css';
import './App_mobile.css';

import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PhoneIcon from '@material-ui/icons/Phone';
import Fab from '@material-ui/core/Fab';

import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";

const backgroundImg = [
  'https://wallpaperaccess.com/full/138773.jpg',
  'https://images7.alphacoders.com/737/thumb-1920-737400.jpg',
  'https://wallpaperaccess.com/full/138821.jpg'
]

const logo = 'https://webstockreview.net/images/sample-png-images-14.png'

function App() {

  var [imgCounter, setImgCounter] = useState(0)

  useEffect(() => {
    let contador = 0;
    setInterval(() => {
      if (contador >= 3) {
        contador = 0
        setImgCounter(contador)
      } else {
        setImgCounter(contador)
      }
      contador++
    }, 100000);
  }, [])

  return (
    <div style={{ background: `no-repeat url(${backgroundImg[imgCounter]}) center center fixed` }} className={isMobile ? 'App_mobile' : 'App'}>
      <div>
        <section id="container" style={isMobile ? {height: "100%"}:null} >
          <div className='logo_div' >
            <img className={isMobile ? 'logo_mobile' : 'logo'} alt='' src={logo} ></img>
          </div>
          <div className="options">

            <div className="icons" >
              <Fab id={isMobile ? 'iconButton_mobile' : 'iconButton'} aria-label="add">
                <MenuBookIcon id='icon' />
              </Fab>
              <h1>Cardápio</h1>
            </div>

            <div className="icons" >
              <Fab id={isMobile ? 'iconButton_mobile' : 'iconButton'} aria-label="add">
                <WhatsAppIcon id='icon' />
              </Fab>
              <h1>WhatsApp</h1>
            </div>

            <div className="icons" >
              <Fab id={isMobile ? 'iconButton_mobile' : 'iconButton'} aria-label="add">
                <PhoneIcon id='icon' />
              </Fab>
              <h1>Telefone</h1>
            </div>

          </div>
        </section>

        <footer style={{ maxWidth: '100vw', height: '100px', background: 'white' }} >
          TESTANDO 123
        </footer>
      </div>
    </div>
  );
}

export default App;
