import React, { useState }from 'react';
import './App.css';
import { v4 as uuid } from 'uuid'
import TeamList from './TeamList'
import TeamForm from './TeamForm'

function App() {
  
  const initialTeam = [
    { id: uuid(),
      name: 'Bob',
      email: 'bob@bob.com',
      role: 'Engineer'
    }
  ]

  const initialFormValues = {
    name: '',
    email: '',
    role: ''
  }

  const [ team, setTeam ] = useState(initialTeam)
  // console.log(team)

  const [ formValues, setFormValues ] = useState(initialFormValues)

  return (
    <div className="App">
      <header>
        <h1>Meet the Team!</h1>
      </header>
      <TeamList team={team}/>
      <TeamForm />
    </div>
  );
}

export default App;
