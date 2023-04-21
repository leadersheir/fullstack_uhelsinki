const Filter = ({ filterTerm, handleFilterTermChange }) => (
    <>
        find countries <input value={filterTerm} onChange={handleFilterTermChange} />
    </>
)

export default Filter