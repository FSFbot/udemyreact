import './index.css';

export const TextInput = ({ searchValue, onChange }) => {
    return(
        <input type="search" className="text-input" 
        onChange={handleChange}
        value={searchValue}
        placeholder='Type your search'
        />
    );
}