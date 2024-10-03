import "./index.css";


const DropdownInput = ({label, name, value, onChange, options}) => {
    return (
        <div className="dropdown-input">
            <label>{label}</label>
            <select name={name} value={value} onChange={onChange}>
                <option value="">{`select ${label}`}</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default DropdownInput;