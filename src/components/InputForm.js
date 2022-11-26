import './InputForm.css';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ThemeProvider } from './ContextProvider';
function InputForm({ inputProps }) {
    const { onChange, isSubmit, setIsSubmit } = useContext(ThemeProvider);
    const [focused, setFocused] = useState(false);

    useEffect(() => {
        if (isSubmit) {
            setFocused(false);
        }
    }, [isSubmit]);

    const handleFocused = (e) => {
        setFocused(true);
        setIsSubmit(false);
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
                value={inputProps.value}
            ></input>
            <span className="error-message">{inputProps.errorMessage}</span>
        </>
    );
}

export default InputForm;
