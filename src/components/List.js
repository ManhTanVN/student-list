function List({ studentData }) {
    console.log('values: ', studentData);
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
                                            <th className="column100 column1" data-column="column1">
                                                No
                                            </th>
                                            <th className="column100 column1" data-column="column2">
                                                Name
                                            </th>
                                            <th className="column100 column2" data-column="column3">
                                                BirthDay
                                            </th>
                                            <th className="column100 column3" data-column="column4">
                                                Email
                                            </th>
                                            <th className="column100 column4" data-column="column5">
                                                Phone Number
                                            </th>
                                            <th className="column100 column4" data-column="column5">
                                                Clear
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {studentData.map((value, index) => (
                                            <>
                                                <tr key={index} className="row100">
                                                    <td className="column100 column1" data-column="column1">
                                                        {index + 1}
                                                    </td>
                                                    <td className="column100 column1" data-column="column2">
                                                        {value.studentname}
                                                    </td>
                                                    <td className="column100 column2" data-column="column3">
                                                        {value.birthday}
                                                    </td>
                                                    <td className="column100 column3" data-column="column4">
                                                        {value.email}
                                                    </td>
                                                    <td className="column100 column4" data-column="column5">
                                                        {value.phone}
                                                    </td>
                                                    <td
                                                        role="button"
                                                        className="text-underline-hover"
                                                        data-column="column5"
                                                    >
                                                        Clear
                                                    </td>
                                                </tr>
                                            </>
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
