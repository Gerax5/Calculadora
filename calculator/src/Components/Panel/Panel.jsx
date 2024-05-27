import PropTypes from 'prop-types';
import styles from "@/styles/Home.module.css"

const Panel = ({text, stylePanel}) => {

    let shortText = text?.slice(0, 9);

    return (
        <div className={styles.ContainerNumber} style={stylePanel}>
            <h1 className={styles.textoNumeros}>{shortText}</h1>
        </div>
    )
}

Panel.propTypes = {
    text: PropTypes.string,
    stylePanel: PropTypes.any
}

export default Panel