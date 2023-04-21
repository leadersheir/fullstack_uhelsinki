import { useState, useEffect } from 'react'

import countryService from './services/countries'

import Countries from './components/Countries'
import CountryDisplay from './components/CountryDisplay'
import Filter from './components/Filter'

const App = () => {

  const [filterTerm, setFilterTerm] = useState('')

  const handleFilterTermChange = e => (
    setFilterTerm(e.target.value)
  )

  const [countryNames, setCountryNames] = useState(null)
  const [country, setCountry] = useState(null)
  const [displayCountry, setDisplayCountry] = useState(null)

  useEffect(() => {
    countryService.getAll()
      .then(data => {
        const countryNames = data.map(country => country.name.common)
        setCountryNames(countryNames)
      })
  }, [])

  useEffect(() => {
    if (country) {
      countryService.getOne(country)
        .then(data => {

          const country = data[0]
          const name = country.name.common
          const area = country.area
          const capital = country.capital[0]
          const languages = Object.values(country.languages)
          const latlng = country.latlng
          const pop = country.population
          const flagUrl = country.flags.svg
          const lat = country.latlng[0]
          const lng = country.latlng[1]

          const displayCountry = {
            name,
            area,
            capital,
            languages,
            latlng,
            pop,
            flagUrl,
            lat,
            lng
          }

          setDisplayCountry(displayCountry)
        })
    }
  }, [country])

  const filteredCountryNames = countryNames !== null ? countryNames.filter(countryName => countryName.toLowerCase().includes(filterTerm.toLowerCase())) : []

  if (filteredCountryNames.length === 1 && country === null) {
    setCountry(filteredCountryNames[0])
  }

  if (filteredCountryNames.length !== 1 && country !== null) {
    setCountry(null)
    setDisplayCountry(null)
  }

  return (
    <>
      <Filter filterTerm={filterTerm} handleFilterTermChange={handleFilterTermChange} />
      {
        filterTerm.length === 0 ?
          <></> : filteredCountryNames.length <= 10 ?
          <Countries setFilterTerm={setFilterTerm} countryNames={filteredCountryNames} /> :
          <p>Too many matches, specify another filter</p>
      }
      {
        displayCountry ? <CountryDisplay displayCountry={displayCountry} /> : <></>
      }
    </>
  )
}

export default App