import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';

import Form from './components/Form';
import List from './components/List';

function App() {
    const [values, setValues] = useState({
        studentname: '',
        birthday: '',
        email: '',
        phone: '',
    });

    const [studentData, setStudentData] = useState([]);
    const inputs = [
        {
            id: 1,
            name: 'studentname',
            type: 'text',
            placeHolder: 'e.g. John',
            errorMessage: "Student name shouldn't include any special character!",
            label: 'Student Name',
            pattern: '^[A-Za-z]{1,16}$',
            required: true,
        },
        {
            id: 2,
            name: 'birthday',
            type: 'date',
            placeHolder: 'Birthday',
            label: 'BirthDay',
            required: true,
            errorMessage: 'Birthday is required!',
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
        },
        {
            id: 4,
            name: 'phone',
            placeHolder: 'e.g +00 000 000 000',
            label: 'Phone Number',
            errorMessage: 'It should be a valid phone number',
            pattern: '^[0-9]{11,16}$',
            required: true,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        setStudentData([...studentData, Object.fromEntries(data.entries())]);
        console.log('student: ', studentData);
    };
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    return (
        <div className="container">
            <div className="student-information-container">
                <div className="text-center py-3 row align-items-center justify-content-center">
                    <h1 className="header-title text-uppercase">Student List</h1>
                </div>
                <Form Props={inputs} handleSubmit={handleSubmit} onChange={onChange} />
                <List studentData={studentData} />
            </div>
        </div>
    );
}

export default App;
