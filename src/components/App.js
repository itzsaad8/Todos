import React, { useState } from 'react'

import './App.css'
import List from './List'
const App = () => {
    const [input, setInput] = useState("")
    const [item, setItem] = useState([])


    const handlechange = (i) => {
        setInput(i.target.value)
    }
    const handleclick = () => {
        setItem((old) => {
            return [...old, input];
        })
        setInput('')
    }
    const delitem = (id) => {
        console.log("deleted")
        setItem((old) => {
            return old.filter((arrElem, index) => {
                return index !== id;
            });
        });
    };
    return (
        <div className='main-div'>
            <div className='center-div'>
                <br />
                <h1>ToDo List</h1>
                <br />
                <input type="text" placeholder='Add Items' value={input} onChange={handlechange} />

                <button onClick={handleclick} >+</button>

                <ol>
                    {
                        item.map((itemVal, index) => {
                            return (
                                <List
                                    key={index}
                                    text={itemVal}
                                    id={index}
                                    onSelect={delitem}
                                />

                            )
                        })
                    }
                </ol>
            </div>

        </div>
    )
}

export default App