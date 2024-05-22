import './Calculator.css'
import Panel from '../Components/Panel'
import Button from '../Components/Button/Button'

const Calculator = () =>{



    return (
        <div className="Container">
            <Panel text={'1000000000'} stylePanel={{width:"80%"}}></Panel>
            <div className='ContainerButtons'>
                <div style={{display:'flex',flexDirection:'row'}}>
                    <Button text={"+"} compareTo={'+'} onClick={()=> console.log('7')}></Button>
                    <Button text={"/"} compareTo={'/'} onClick={()=> console.log('7')}></Button>
                    <Button text={"x"} compareTo={'*'} onClick={()=> console.log('7')}></Button>
                    <Button text={"-"} compareTo={'-'} onClick={()=> console.log('7')}></Button>
                </div>
                <div style={{display:'flex',flexDirection:'row'}}>
                    <Button text={"7"} compareTo={'7'} onClick={()=> console.log('7')}></Button>
                    <Button text={"8"} compareTo={'8'} onClick={()=> console.log('7')}></Button>
                    <Button text={"9"} compareTo={'9'} onClick={()=> console.log('7')}></Button>
                    <Button text={"+"} compareTo={'+'} onClick={()=> console.log('7')}></Button>
                </div>
                <div style={{display:'flex',flexDirection:'row'}}>
                    <Button text={"4"} compareTo={'4'} onClick={()=> console.log('7')}></Button>
                    <Button text={"5"} compareTo={'5'} onClick={()=> console.log('7')}></Button>
                    <Button text={"6"} compareTo={'6'} onClick={()=> console.log('7')}></Button>
                    <Button text={"C"} compareTo={"Delete"} onClick={()=> console.log('7')}></Button>
                </div>
                <div style={{display:'flex',flexDirection:'row'}}>
                    <Button text={"1"} compareTo={'1'} onClick={()=> console.log('7')}></Button>
                    <Button text={"2"} compareTo={'2'} onClick={()=> console.log('7')}></Button>
                    <Button text={"3"} compareTo={'3'} onClick={()=> console.log('7')}></Button>
                    <Button text={"="} compareTo={'Enter'} onClick={() => console.log('=')}></Button>
                </div>
                <div style={{display:'flex',flexDirection:'row'}}>
                    <Button text={"0"} compareTo={'0'} onClick={()=> console.log('7')} styleButton={{width:"160px"}}></Button>
                    <Button text={"."} compareTo={'.'} onClick={()=> console.log('7')}></Button>
                </div>
            </div>
        </div>
    )
}



export default Calculator