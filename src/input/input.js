import React from "react";
import classes from './Input.css'

const Input = props => {
    
    const inputType = props.type || 'text' //определяем какого типа будет инпут
    const cls = [classes.Input]
    const htmlFor = `${inputType}-${Math.random()}`

    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input 
            type={inputType}
            id={htmlFor}
            value={props.value}
            onChange = {props.onChange} //следим за изменениями компонента
            ></input>
        </div>
    )

}

export default Input 