import { Card, Container} from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import { FormComponent, FormCulture, FormEconomy, FormHistory, FormLearning, FormPhilosopy, FormPsycho, FormScience, FormSciTech, FormSports, FormTech } from './components/Forms'

function App() {
  const [data, setData] = useState({});

  const onChange = (e)=>{
    e.preventDefault();
    
    const obj = data;
    obj[e.target.name] = e.target.value;
    setData(obj);

  }

  const onClick = () => {
    console.log(data)
    alert('ok')
  }
  
  return (
    <Container>
      <Card className = 'mt-3'>
        <Card.Body>
          <Card.Title>Tecnología y Sociedad</Card.Title>
          <FormTech onChange={onChange} onClick={onClick}/>
        </Card.Body>
      </Card>
      <Card className = 'mt-3'>
        <Card.Body>
          <Card.Title>Ciencia y Medio Ambiente</Card.Title>
          <FormScience onChange={onChange} onClick={onClick}/>
        </Card.Body>
      </Card>
      <Card className = 'mt-3'>
        <Card.Body>
          <Card.Title>Historia y Política</Card.Title>
          <FormHistory onChange={onChange} onClick={onClick}/>
        </Card.Body>
      </Card>
      <Card className = 'mt-3'>
        <Card.Body>
          <Card.Title>Economía y Finanzas</Card.Title>
          <FormEconomy onChange={onChange} onClick={onClick}/>
        </Card.Body>
      </Card>
      <Card className = 'mt-3'>
        <Card.Body>
          <Card.Title>Cultura y Sociedad</Card.Title>
          <FormCulture onChange={onChange} onClick={onClick}/>
        </Card.Body>
      </Card>
      <Card className = 'mt-3'>
        <Card.Body>
          <Card.Title>Ciencia y Tecnología</Card.Title>
          <FormSciTech onChange={onChange} onClick={onClick}/>
        </Card.Body>
      </Card>
      <Card className = 'mt-3'>
        <Card.Body>
          <Card.Title>Psicología y Salud Mental</Card.Title>
          <FormPsycho onChange={onChange} onClick={onClick}/>
        </Card.Body>
      </Card>
      <Card className = 'mt-3'>
        <Card.Body>
          <Card.Title>Filosofía y Ética</Card.Title>
          <FormPhilosopy onChange={onChange} onClick={onClick}/>
        </Card.Body>
      </Card>
      <Card className = 'mt-3'>
        <Card.Body>
          <Card.Title>Educación y Aprendizaje</Card.Title>
          <FormLearning onChange={onChange} onClick={onClick}/>
        </Card.Body>
      </Card>
      <Card className = 'mt-3'>
        <Card.Body>
          <Card.Title>Deportes y Salud</Card.Title>
          <FormSports onChange={onChange} onClick={onClick}/>
        </Card.Body>
      </Card>
      <Card className = 'mt-3'>
        <Card.Body>
          <Card.Title>Formulario para dar de alta un usuario</Card.Title>
          <FormComponent onChange={onChange} onClick={onClick}/>
        </Card.Body>
      </Card>

    </Container>
  );
}

export default App;
