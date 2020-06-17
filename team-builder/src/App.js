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
  
  const formValues = {
    name: '',
    email: '',
    role: ''
  }

  const { team, setTeam } = useState(initialTeam)

  return (
    <div className="App">
      <header>
        <h1>Meet the Team!</h1>
      </header>
      <TeamList />
      <TeamForm />
    </div>
  );
}

export default App;
