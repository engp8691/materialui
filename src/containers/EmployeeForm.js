import React from 'react';

import { useAsync } from 'react-async';
import { fetchEmployeeByID } from '../api/Services';
import Employee from '../components/Employee';

const EmployeeForm = (props) => {
    const [id, setId] = React.useState(0);
    const { data, error, isPending, run } = useAsync({ deferFn: fetchEmployeeByID });

    const handleTyping = (e) => {
        setId(e.target.value);
    }

    const clickHandle = (e) => {
        run(id);
    }

    return (
        <div>
            <div>
                <span>ID:</span><input type="text" name="id" onChange={handleTyping}></input>
                <button onClick={clickHandle}>Submit</button>
            </div>
            {
                (isPending) ? <span>Loading</span> : error ? <span>Error...</span> : data ? <Employee {...data} /> : null
            }
        </div>
    )

}

export default EmployeeForm;
