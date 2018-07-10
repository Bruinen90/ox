import React from 'react';
import KKSingle from './kkSignle/kkSingle'

const KKMain = (props) => {
    const grid = props.grid.map((value, index) => {
        return (
            <KKSingle
                value={value}
                key={index}
                click={() => props.click(index)}
            />
        )
    })

    return(
        <div className="main">
        {grid}
        </div>
    )
}


export default KKMain;
