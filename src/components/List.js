import React from 'react'
import './App.css'
import { AiOutlineClose } from "react-icons/ai"


const List = (props) => {

    return (
        <>
            <div className='todo-style'>
                <AiOutlineClose
                    className='fa-times '
                    onClick={() => {
                        props.onSelect(props.id)
                    }} />
                {/* <i className="fa fa-times " aria-hidden="true"></i> */}
                <li>{props.text}</li>

            </div>
        </>
    )
}

export default List