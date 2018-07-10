import React from 'react';

const OKButton = (props) => {
    return(
        <div>
        <input type="button" onClick={props.click} value="Confirm, your turn" className="button"/>
        </div>
    )
}

export default OKButton;
