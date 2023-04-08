const PersonForm = ({
    newName,
    setNewName,
    newNumber,
    setNewNumber,
    handleNameChange,
    handleNumberChange,
    persons,
    setPersons
}) => {
    const addNewPerson = e => {
        e.preventDefault()
        const newPersonObject = {
        name : newName,
        number : newNumber
        }

        const duplicateName = persons.filter(person => person.name===newName).length !== 0
        const duplicateNumber = persons.filter(person => person.number===newNumber).length !== 0

        if (!duplicateName && !duplicateNumber) {
        setPersons([...persons, newPersonObject])
        setNewName('')
        setNewNumber('')
        } else if (duplicateName && !duplicateNumber) {
        alert(`${newName} already exists in phonebook`)
        } else if (!duplicateName && duplicateNumber) {
        alert(`${newNumber} already exists in phonebook`)
        } else {
        alert(`Person already exists in phonebook`)
        }
    }

    return (
     <div>
        <h2>add new contact</h2>
        <form onSubmit={addNewPerson}>
            <div>
                name: <input value={newName} onChange={handleNameChange} />
            </div>
            <div>
                number: <input value={newNumber} onChange={handleNumberChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>   
    </div>
    )
}

export default PersonForm