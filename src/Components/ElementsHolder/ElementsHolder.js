import React from 'react'
import './ElementsHolder.css';

const ElementsHolder = (props) => {
    return(
        <div className='elementsWrapper'>
            <div className='pageTitle'>
                <h1 className='pageTitle'>{props.pageTitle}</h1>
            </div>
            {props.children}
        </div>
    );
}

export default ElementsHolder