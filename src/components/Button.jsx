import React from 'react'

export const Button = (props) => {
    return (
        <button
            style={{ marginRight: '1rem' }}
            className={`btn btn-primary col-md-${props.width}`}
            //onClick={props.click}
            type={props.tipo}
        >
            {props.nome}
        </button >
    )
}
