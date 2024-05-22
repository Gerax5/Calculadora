import './Calculator.css'
import Panel from '../Components/Panel'
import { useEffect } from 'react'

const Calculator = () =>{
    return (
        <div className="Container">
            <Panel text={'1000000000'} stylePanel={{width:"80%"}}></Panel>
        </div>
    )
}



export default Calculator