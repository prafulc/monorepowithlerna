import * as React from 'react';

interface Props {
    handleClick?: any
}

export default ({ handleClick }:Props) => {
    return <div>
        <input name="username" />
        <button onClick={handleClick}>Next</button>
    </div>;
}