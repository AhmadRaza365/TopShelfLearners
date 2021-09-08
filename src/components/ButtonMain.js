import './ButtonMain.css';

import React from 'react'

export default function ButtonMain(props) {
    return (
        <div>
            <button className ="ButtonMainText"  type="submit">{props.ButtonMainText}</button>
        </div>
    )
}
