import React from 'react';

const KKSingle = (props) => {
    return(
        <div className={'single '+props.value} onClick={props.click}>
            <div className={'value'+props.value} />
        </div>
    )
}

export default KKSingle;
