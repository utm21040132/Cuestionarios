import { useState } from "react"
import { Button, Container, Form } from "react-bootstrap"

export const Counter = ()=>{
    const [count, setCounter] = useState(0);
    const [list, setList] = useState([1]);

    const addListElement = ()=>{
        const nList = list;
        nList.push(nList.length + 1)
        setList([...nList])
        
    }
    const restListElement = ()=>{
        const nList = list;
        nList.pop()
        setList([...nList])
    }



    return(
        <Container>
            <h3>{count}</h3>
            <Button onClick={()=>setCounter(count + 1)}>+</Button>
            <Button onClick={()=>setCounter(count - 1)}>-</Button>
            <hr></hr>
            <h3>Lista dinamica</h3>
            {
                list.map((value,i)=>(
                    <>
                        <p>Cifra: {i + 1}</p>
                        <Form.Control className="mb-3"/>
                    </>
                ))
            }
             <Button onClick={()=>addListElement()}>+</Button>
             <Button onClick={()=>restListElement()}>-</Button>
        </Container>
    )
}