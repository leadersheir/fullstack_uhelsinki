import personsService from '../services/persons'
import Person from './Person'

const Persons = ({ persons, setPersons }) => {

  const handleDeletePerson = person => {

    if (window.confirm(`Delete ${person.name}?`)) {
      personsService
        .deletePerson(person.id)
        .then(setPersons(persons.filter(p => p.id !== person.id)))
    }
  }

  return (
    <div>
      <h2>Numbers</h2>
      {persons.map(person => (
        <Person key={person.id} person={person} handleDeletePerson={handleDeletePerson}/>
      ))}
    </div>
  )
}

export default Persons