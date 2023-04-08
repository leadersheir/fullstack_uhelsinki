import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const [filterText, setFilterText] = useState('')

  const handleNameChange = e => {
    setNewName(e.target.value)
  }
  const handleNumberChange = e => {
    setNewNumber(e.target.value)
  }

  const handleFilterTextChange = e => {
    setFilterText(e.target.value)
  }

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filterText.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterText={filterText} handleFilterTextChange={handleFilterTextChange} />
      <PersonForm 
        newName={newName}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        persons={persons}
        setPersons={setPersons}
      />
      <Persons persons={filteredPersons} />
    </div>
  )
}

export default App