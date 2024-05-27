import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types';
import styles from "@/styles/Home.module.css"

const Button = ({ text, onClick, compareTo, styleButton }) => {
  const [clicked, setClicked] = useState(false);
  const botonRef = useRef(null);
  const [active, setActive] = useState(false);
  const debounceTimeout = useRef(null);

  text = text?.slice(0, 9);

  const manejarTecla = (event) => {
    if (event.key === compareTo) {
      botonRef.current.click();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', manejarTecla);

    return () => {
      window.removeEventListener('keydown', manejarTecla);
    };
  }, [compareTo]);

  useEffect(() => {
    if (clicked) {
      setTimeout(() => {
        setClicked(false);
      }, 500);
    }
  }, [clicked]);

  const handleClick = async () => {
    if (clicked || debounceTimeout.current) {
      return;
    }
    setClicked(true);

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      debounceTimeout.current = null;
      setClicked(false);
    }, 500);

    setActive(true);
    setTimeout(() => setActive(false), 500);

    await onClick();
  };

  return (
    <button
      ref={botonRef}
      className={`${styles.button} ${active ? styles.buttonActive : ''}`}
      onClick={handleClick}
      title={text}
      style={styleButton}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.any,
  compareTo: PropTypes.any,
  styleButton: PropTypes.any,
};

export default Button;
