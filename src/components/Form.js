import InputForm from './InputForm';

function Form({ Props, submitType, handleSubmit, onChange }) {
    return (
        <div>
            <div className="bg order-1 order-md-2"></div>
            <div className="contents order-2 order-md-1">
                <div className="">
                    <div className="row align-items-center justify-content-left">
                        <div className="py-3">
                            <h3 className="text-uppercase">Add Student</h3>
                            <form id="student-form-content" onSubmit={handleSubmit} action="#" method="post">
                                {Props.map((inputProps) => (
                                    <div key={inputProps.id} className="row">
                                        <div className="col-md-12 mb-3">
                                            <div className="form-group first">
                                                <InputForm inputProps={inputProps} onChange={onChange} />
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <button className="btn mt-4 px-5 btn-primary">{submitType}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;
