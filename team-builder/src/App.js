import React, { useState }from 'react';
import './App.css';
import { v4 as uuid } from 'uuid'

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

    </div>
  );
}

export default App;
