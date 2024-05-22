import './Calculator.css'
import Panel from '../Components/Panel'
import Button from '../Components/Button/Button'
import { useEffect, useState } from 'react'

const Calculator = () =>{

    const [toShow, setToShow] = useState('')
    const [numbersArray, setNumberArray] = useState([])
    const [firstNumber, setFirstNumber] = useState(0)
    const [typeFunction, setTypeFunction] = useState(null)
    const [secondNumber, setSecondNumber] = useState(0)
    const [isFirstNumber, setIsFirstNumber] = useState(false)

    const handlerOnClikNumbers = (type) =>{
        console.log(type)
        if(numbersArray.length < 9){
            if(type == '0' && numbersArray.length < 1){
                return
            }
            if(type == '.' && numbersArray.length < 1){
                const newNumbersArray = [0,'.']
                setNumberArray(newNumbersArray)
            }else{
                const newNumbersArray = [...numbersArray, type]
                setNumberArray(newNumbersArray)
            }
        }
    }

    const handlerOnClickCharacter = (type) =>{
        if(type == 'del'){
            const newNumberArray = numbersArray.slice(0, -1);
            setNumberArray(newNumberArray);
        }
    }
    
    useEffect(() => {
        const newToShow = numbersArray.join('');
        setToShow(newToShow);
    },[numbersArray])

    return (
        <div className="Container">
            <Panel text={toShow} stylePanel={{width:"80%"}}></Panel>
            <div className='ContainerButtons'>
                <div style={{display:'flex',flexDirection:'row'}}>
                    <Button text={"+"} compareTo={'+'} onClick={()=> console.log('7')}></Button>
                    <Button text={"/"} compareTo={'/'} onClick={()=> console.log('7')}></Button>
                    <Button text={"x"} compareTo={'*'} onClick={()=> console.log('7')}></Button>
                    <Button text={"-"} compareTo={'-'} onClick={()=> console.log('7')}></Button>
                </div>
                <div style={{display:'flex',flexDirection:'row'}}>
                    <Button text={"7"} compareTo={'7'} onClick={() => handlerOnClikNumbers('7')}></Button>
                    <Button text={"8"} compareTo={'8'} onClick={() => handlerOnClikNumbers('8')}></Button>
                    <Button text={"9"} compareTo={'9'} onClick={() => handlerOnClikNumbers('9')}></Button>
                    <Button text={"+"} compareTo={'+'} onClick={() => handlerOnClikNumbers('10')}></Button>
                </div>
                <div style={{display:'flex',flexDirection:'row'}}>
                    <Button text={"4"} compareTo={'4'} onClick={() => handlerOnClikNumbers('4')}></Button>
                    <Button text={"5"} compareTo={'5'} onClick={() => handlerOnClikNumbers('5')}></Button>
                    <Button text={"6"} compareTo={'6'} onClick={() => handlerOnClikNumbers('6')}></Button>
                    <Button text={"C"} compareTo={"Backspace"} onClick={()=> handlerOnClickCharacter('del')}></Button>
                </div>
                <div style={{display:'flex',flexDirection:'row'}}>
                    <Button text={"1"} compareTo={'1'} onClick={() => handlerOnClikNumbers('1')}></Button>
                    <Button text={"2"} compareTo={'2'} onClick={() => handlerOnClikNumbers('2')}></Button>
                    <Button text={"3"} compareTo={'3'} onClick={() => handlerOnClikNumbers('3')}></Button>
                    <Button text={"="} compareTo={'Enter'} onClick={() => console.log('=')}></Button>
                </div>
                <div style={{display:'flex',flexDirection:'row'}}>
                    <Button text={"0"} compareTo={'0'} onClick={() => handlerOnClikNumbers('0')} styleButton={{width:"160px"}}></Button>
                    <Button text={"."} compareTo={'.'} onClick={() => handlerOnClikNumbers('.')}></Button>
                </div>
            </div>
        </div>
    )
}



export default Calculator