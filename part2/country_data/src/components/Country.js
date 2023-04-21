import { useState } from 'react'

const Country = ({ countryName, setFilterTerm }) => {

    const [showCountryName, setShowCountryName] = useState(true)

    const handleCountryShow = () => {
        setFilterTerm(countryName)
        setShowCountryName(!showCountryName)
    }

    if (showCountryName) {
        return (
            <p>{countryName} <button onClick={handleCountryShow}>show</button></p>
        )
    }
}

export default Country