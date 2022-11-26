import { createContext, useState } from 'react';

export const ThemeProvider = createContext();
function ContextProvider({ children }) {
    const [values, setValues] = useState({
        studentname: '',
        birthday: '',
        email: '',
        phone: '',
    });
    const [inputs, setInputs] = useState([
        {
            id: 1,
            name: 'studentname',
            type: 'text',
            placeHolder: 'e.g. John',
            errorMessage: "Student name shouldn't include any special character!",
            label: 'Student Name',
            pattern: '^[A-Za-z]{1,16}$',
            required: true,
            value: '',
            focused: false,
        },
        {
            id: 2,
            name: 'birthday',
            type: 'date',
            placeHolder: 'Birthday',
            label: 'Birthday',
            required: true,
            errorMessage: 'Birthday is required!',
            value: '',
            focused: false,
        },
        {
            id: 3,
            name: 'email',
            type: 'email',
            placeHolder: 'e.g. john@your-domain.com',
            errorMessage: 'It should be a valid email address!',
            label: 'Email',
            pattern: '^[A-Za-z]{1,16}$',
            required: true,
            value: '',
            focused: false,
        },
        {
            id: 4,
            name: 'phone',
            placeHolder: 'e.g +00 000 000 000',
            label: 'Phone Number',
            errorMessage: 'It should be a valid phone number',
            pattern: '^[0-9]{11,16}$',
            required: true,
            value: '',
            focused: false,
        },
    ]);
    const [studentData, setStudentData] = useState([]);
    const [submitType, setSubmitType] = useState('ADD');
    const [editIndex, setEditIndex] = useState(0);

    const [isSubmit, setIsSubmit] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        if (submitType === 'ADD') {
            setStudentData([...studentData, Object.fromEntries(data.entries())]);
        } else {
            const newStudentData = [...studentData];
            newStudentData[editIndex] = Object.fromEntries(data.entries());
            setStudentData(newStudentData);
            setSubmitType('ADD');
        }
        setIsSubmit(true);
        resetValue();
    };
    const onChange = (e) => {
        const currentIndex = inputs.findIndex((input) => input.name === e.target.name);
        if (typeof currentIndex !== 'undefined') {
            const newInputs = [...inputs];
            newInputs[currentIndex].value = e.target.value;
            setInputs(newInputs);
        }
        setIsSubmit(true);
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    const handleClear = (index) => {
        const newStudentData = studentData.slice(0, index).concat(studentData.slice(index + 1, studentData.length));
        setStudentData(newStudentData);
    };
    const resetValue = () => {
        const newInputs = [...inputs].reduce((res, curr) => {
            curr.value = '';
            return (res = [...res, curr]);
        }, []);
        setInputs(newInputs);
    };
    const handleEdit = (index, value) => {
        setEditIndex(index);
        const newInputs = [...inputs].reduce((res, curr) => {
            switch (curr.name) {
                case 'birthday':
                    curr.value = value.birthday;
                    break;
                case 'email':
                    curr.value = value.email;
                    break;
                case 'phone':
                    curr.value = value.phone;
                    break;
                case 'studentname':
                    curr.value = value.studentname;
                    break;
                default:
                    curr.value = '';
                    break;
            }
            return (res = [...res, curr]);
        }, []);
        setInputs(newInputs);
        setSubmitType('UPDATE');
    };

    const value = {
        inputs,
        setInputs,
        values,
        setValues,
        studentData,
        setStudentData,
        submitType,
        setSubmitType,
        editIndex,
        setEditIndex,
        isSubmit,
        setIsSubmit,
        handleSubmit,
        onChange,
        resetValue,
        handleEdit,
        handleClear,
    };
    return <ThemeProvider.Provider value={value}>{children}</ThemeProvider.Provider>;
}

export default ContextProvider;
