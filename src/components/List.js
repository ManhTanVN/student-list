import { useContext } from 'react';
import { ThemeProvider } from './ContextProvider';
function List() {
    const { studentData, handleClear, handleEdit } = useContext(ThemeProvider);
    return (
        <div className="">
            <div className="row align-items-center justify-content-center">
                <div className="text-center py-5">
                    <h3 className="text-uppercase">List here</h3>
                    <div className="table-container">
                        <div className="wrap-table100">
                            <div className="table100 ver1 m-b-110">
                                <table className="table table-striped table-hover table-bordered">
                                    <thead className="table thead-light thead-dark">
                                        <tr className="table-dark">
                                            <th>No</th>
                                            <th>Name</th>
                                            <th>Birthday</th>
                                            <th>Email</th>
                                            <th>Phone Number</th>
                                            <th>Clear</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {studentData.map((value, index) => (
                                            <tr key={index} className="row100">
                                                <td>{index + 1}</td>
                                                <td>{value.studentname}</td>
                                                <td>{value.birthday}</td>
                                                <td>{value.email}</td>
                                                <td>{value.phone}</td>
                                                <td className="text-underline-hover">
                                                    <span
                                                        onClick={() => handleEdit(index, value)}
                                                        role="button"
                                                        className="me-3 p-1"
                                                    >
                                                        Edit
                                                    </span>
                                                    <span
                                                        onClick={() => handleClear(index)}
                                                        role="button"
                                                        className="p-1 "
                                                    >
                                                        Clear
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default List;
