import Country from './Country'

const Countries = ({ countryNames, setFilterTerm }) => (
    <>
        {countryNames.map(countryName => <Country key={countryName} countryName={countryName} setFilterTerm={setFilterTerm} /> )}
    </>
)

export default Countries