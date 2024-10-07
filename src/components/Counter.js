import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

export const Counter = () => {
    const [listaParaInputs, setlistaParaInputs] = useState([1]); //Lista para los inputs
    const [listaSuma, setlistaSuma] = useState([null]); //Lista  para la suma

    const addlistaParaInputs = () => {
        const newListaParaInputs = [...listaParaInputs, listaParaInputs.length + 1];//Forzamos la entrata con los ...
        setlistaParaInputs(newListaParaInputs);//Hacemos el set

        const newnewListaUma = [...listaSuma, null]; //Lo mismo de arriba pero que empiece en null para que no aparezza ni madres
        setlistaSuma(newnewListaUma);//Cada que agrega tambien setea
    };

    const restlistaParaInputs = () => { //Lo mismo de arriba pero en lugar de agregar, popeamos y ya ez 
        if (listaParaInputs.length > 1) {
            const newListaParaInputs = [...listaParaInputs];
            newListaParaInputs.pop();
            setlistaParaInputs(newListaParaInputs);

            const newnewListaUma = [...listaSuma];//Tambien quitamos el numero poruqee ya no está
            newnewListaUma.pop();
            setlistaSuma(newnewListaUma);
        }
    };

    
    const cambioEnVariable = (index, value) => { //Metemos index y valor en los parametros para que sepa que onda
        const newnewListaUma = [...listaSuma];
        newnewListaUma[index] = parseInt(value) || 0; // Asignar el valor al índice correspondiente
        setlistaSuma(newnewListaUma);//Agregarlo a la lista
    };

    const totalSum = listaSuma.reduce((acumulador, actual) => acumulador + actual, 0);

    return (
        <Container>
            <h3>Lista dinámica</h3>
            {listaParaInputs.map((element, i) => (
                <div key={i}>
                    <p>Cifra {i + 1}:</p>
                    <Form.Control
                        className="mb-3"
                        type="number"
                        value={listaSuma[i]} // Mostrar el valor actual del input
                        onChange={(e) => cambioEnVariable(i, e.target.value)} // Actualizar el valor en listaSuma
                    />
                </div>
            ))}
            <Button onClick={addlistaParaInputs}>+</Button>
            <Button onClick={restlistaParaInputs}>-</Button>
            <h3>Suma total: {totalSum}</h3>
        </Container>
    );
};