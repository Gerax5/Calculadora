import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types';
import './Button.css'

const Button = ({ text, onClick }) => {
  const [clicked, setclicked] = useState(false)
  const botonRef = useRef(null);
  const [active, setActive] = useState(false)
  let debounceTimeout;


  const manejarTecla = (event) => {
      if(event.key == text){
        botonRef.current.click();
        setActive(true);
        setTimeout(() => setActive(false), 500);
      }
  };

  useEffect(() => {
    window.addEventListener('keydown', manejarTecla);

    return () => {
      window.removeEventListener('keydown', manejarTecla);
    };
  }, []);

  useEffect(() => {
    if (clicked) {
      setTimeout(() => {
        setclicked(false)
      }, 500)
    }
  }, [clicked])

  const handleClick = async () => {
    if (clicked || debounceTimeout) {
      return
    }
    setclicked(true)
    if (debounceTimeout) {
        clearTimeout(debounceTimeout);
    }

    debounceTimeout = setTimeout(() => {
        debounceTimeout = null;
        setclicked(false)
      }, 500);

    
    await onClick()
  }

  return (
    <button ref={botonRef} className={`button ${active ? 'button-active' : ''}`} onClick={handleClick} title={text}>
      {text}
    </button>
  )
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.any
}

export default Button