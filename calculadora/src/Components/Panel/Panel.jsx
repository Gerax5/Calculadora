import PropTypes from 'prop-types';
import './Panel.css'

const Panel = ({text, stylePanel}) => {

    let shortText = text?.slice(0, 9);

    return (
        <div className='ContainerNumber' style={stylePanel}>
            <h1 className='textoNumeros'>{shortText}</h1>
        </div>
    )
}

Panel.propTypes = {
    text: PropTypes.string,
    stylePanel: PropTypes.any
}

export default Panel