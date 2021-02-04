import * as React from 'react';

interface Props {
    handleClick?: any
}

export default ({ handleClick }: Props) => {
    return <div>
        <input type="password" name="password" />
        <button onClick={handleClick}>Login</button>
    </div>;
}