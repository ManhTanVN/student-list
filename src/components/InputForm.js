import { useState } from 'react';
import './InputForm.css';

function InputForm({ inputProps, onChange }) {
    const [focused, setFocused] = useState(false);
    const handleFocused = (e) => {
        setFocused(true);
    };
    return (
        <>
            <label htmlFor={inputProps.name}>{inputProps.label}</label>
            <input
                onChange={onChange}
                name={inputProps.name}
                type={inputProps.type}
                className="form-control input-field"
                placeholder={inputProps.placeHolder}
                id={inputProps.name}
                required={inputProps.required}
                onBlur={handleFocused}
                focused={focused.toString()}
            ></input>
            <span className="error-message">{inputProps.errorMessage}</span>
        </>
    );
}

export default InputForm;
