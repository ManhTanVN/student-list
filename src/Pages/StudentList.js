import Form from '../components/Form';
import List from '../components/List';
function StudentList() {
    return (
        <div className="container">
            <div className="student-information-container">
                <div className="text-center py-3 row align-items-center justify-content-center">
                    <h1 className="header-title text-uppercase">Student List</h1>
                </div>
                <Form />
                <List />
            </div>
        </div>
    );
}

export default StudentList;
