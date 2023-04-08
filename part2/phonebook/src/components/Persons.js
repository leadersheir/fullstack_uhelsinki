const Persons = ({ persons }) => (
    <div>
      <h2>Numbers</h2>
      {persons.map((person, i) => <p key={i}>{person.name} {person.number}</p>)}
    </div>
)

export default Persons