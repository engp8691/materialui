import React from 'react';
import injectProps from './logProps';

const Person = (props) => {
    return (
        <div>
            Hello {props.name} from {props.owner}
        </div>
    )
}

export default injectProps("State Street")(Person);
