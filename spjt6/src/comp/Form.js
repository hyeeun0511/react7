import React from 'react';

// 컴퍼넌트 선언
const Form = () => {
    return(
        <>
        <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">Example label</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Another label</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"/>
        </div>
        </>
    )
}

export default Form;