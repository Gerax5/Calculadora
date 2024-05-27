import styles from "@/styles/Home.module.css";
import Panel from '../Components/Panel'
import Button from '../Components/Button/Button'
import { useEffect, useState } from 'react'
import { add, sub, mul, div, mod } from '../Utils/math'

const Calculator = () => {
    const [toShow, setToShow] = useState('')
    const [numbersArray, setNumberArray] = useState([])
    const [firstNumber, setFirstNumber] = useState(0)
    const [typeFunction, setTypeFunction] = useState(null)
    const [isFirstNumber, setIsFirstNumber] = useState(false)
    const [isFinish, setIsFinish] = useState(false)

    const handlerOnClickNumbers = (type) => {
        console.log(type)
        if (numbersArray.length < 9) {
            if (type === '0' && numbersArray.length < 1) {
                return
            }
            if (type === '.' && numbersArray.length < 1) {
                const newNumbersArray = [0, '.']
                setNumberArray(newNumbersArray)
            } else {
                const newNumbersArray = [...numbersArray, type]
                setNumberArray(newNumbersArray)
            }
        }
    }

    const handlerOnClickCharacter = (type, func = null) => {
        if(type == 'cambio'){
            if(numbersArray.length < 9){
                let newNumbersArray;
                if (numbersArray[0] === '-') {
                    newNumbersArray = numbersArray.slice(1);
                } else {
                    newNumbersArray = ['-', ...numbersArray];
                }
                setNumberArray(newNumbersArray);
            }else{
                let newNumbersArray;
                if (numbersArray[0] === '-') {
                    newNumbersArray = numbersArray.slice(1);
                    setNumberArray(newNumbersArray);
                }
            }
            return
        }
        if(type == 'CE'){
            setToShow('')
            setNumberArray([])
            setFirstNumber(0)
            setTypeFunction(null)
            setIsFirstNumber(false)
            setIsFinish(false)
            return
        }
        if (type === 'del') {
            const newNumberArray = numbersArray.slice(0, -1);
            setNumberArray(newNumberArray);
            return
        }
        if (type === '=') {
            if (!isFinish) {
                return
            }
            let newSecondNumber
            if (numbersArray.length < 1) {
                newSecondNumber = 0
            } else {
                newSecondNumber = numbersArray.join('');
                newSecondNumber = Number(newSecondNumber)
            }
            try {
                let result = typeFunction(firstNumber, newSecondNumber)
                result = result.toString().slice(0, 9)
                let newArray = Array.from(result)
                console.log(result)
                setNumberArray(newArray)
                console.log(numbersArray)
            } catch (error) {
                setToShow('Error')
            }
            setIsFirstNumber(false)
            setIsFinish(false)
            return
        }
        if (!isFirstNumber) {
            
            let newFirstNumber
            if (numbersArray.length < 1) {
                newFirstNumber = 0
            } else {
                newFirstNumber = numbersArray.join('');
                newFirstNumber = Number(newFirstNumber)
            }
            setFirstNumber(newFirstNumber)
            setIsFirstNumber(true)
            setIsFinish(true)
            setTypeFunction(() => func)
            setNumberArray([])
        }else{
            let newSecondNumber
            if (numbersArray.length < 1) {
                newSecondNumber = 0
            } else {
                newSecondNumber = numbersArray.join('');
                newSecondNumber = Number(newSecondNumber)
            }
            let result = typeFunction(firstNumber, newSecondNumber)
            result = result.toString().slice(0, 9)
            console.log(result)
            let newArray = Array.from(result)
            setNumberArray(newArray)
            setFirstNumber(Number(result))
            setIsFirstNumber(false)
            setIsFinish(false)
        }
    }

    useEffect(() => {
        const newToShow = numbersArray.join('');
        setToShow(newToShow);
    }, [numbersArray])

    return (
        <div className={styles.Container}>
            <Panel text={toShow} stylePanel={{ width: "80%" }}></Panel>
            <div className={styles.ContainerButtons}>
                <div style={{ display: 'flex', flexDirection: 'row'}}>
                    <Button text={"+"} compareTo={'+'} onClick={() => handlerOnClickCharacter('+', add)}></Button>
                    <Button text={"/"} compareTo={'/'} onClick={() => handlerOnClickCharacter('/', div)}></Button>
                    <Button text={"x"} compareTo={'*'} onClick={() => handlerOnClickCharacter('*', mul)}></Button>
                    <Button text={"-"} compareTo={'-'} onClick={() => handlerOnClickCharacter('-', sub)}></Button>
                    <Button text={"%"} compareTo={'%'} onClick={() => handlerOnClickCharacter('%', mod)}></Button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Button text={"7"} compareTo={'7'} onClick={() => handlerOnClickNumbers('7')}></Button>
                    <Button text={"8"} compareTo={'8'} onClick={() => handlerOnClickNumbers('8')}></Button>
                    <Button text={"9"} compareTo={'9'} onClick={() => handlerOnClickNumbers('9')}></Button>
                    <Button text={"←"} compareTo={"Backspace"} onClick={() => handlerOnClickCharacter('del')}></Button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Button text={"4"} compareTo={'4'} onClick={() => handlerOnClickNumbers('4')}></Button>
                    <Button text={"5"} compareTo={'5'} onClick={() => handlerOnClickNumbers('5')}></Button>
                    <Button text={"6"} compareTo={'6'} onClick={() => handlerOnClickNumbers('6')}></Button>
                    <Button text={"="} compareTo={'Enter'} onClick={() => handlerOnClickCharacter('=')}></Button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Button text={"1"} compareTo={'1'} onClick={() => handlerOnClickNumbers('1')}></Button>
                    <Button text={"2"} compareTo={'2'} onClick={() => handlerOnClickNumbers('2')}></Button>
                    <Button text={"3"} compareTo={'3'} onClick={() => handlerOnClickNumbers('3')}></Button>
                    <Button text={"CE"} compareTo={'B'} onClick={() => handlerOnClickCharacter('CE')}></Button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Button text={"0"} compareTo={'0'} onClick={() => handlerOnClickNumbers('0')} styleButton={{ width: "160px" }}></Button>
                    <Button text={"."} compareTo={'.'} onClick={() => handlerOnClickNumbers('.')}></Button>
                    <Button text={"(-/+)"} compareTo={'C'} onClick={() => handlerOnClickCharacter('cambio')}></Button>
                </div>
            </div>
        </div>
    )
}

export default Calculator