import React, { useState } from 'react';
import todo from '../images/todo.gif';


const ToDo = () => {
    // first state is to add input data
    const [inputData, setInputData] = useState('');
    // second state is to maintain input data on onClick addItem
    const [items, setItems] = useState([]);


    const addItem = () => {
        // This will check if field is empty then it'll show alert other wise update the list
        if (!inputData) {
            alert("Please Enter data to Add in a List.")
        } else {
            // ...items will clone previous state side by side to input data
            setItems([...items, inputData]);
            // to clear field after add item
            setInputData('');
        }
    }

    // Delete single item
    const deleteItem = (id) => {
        // Filter return those value whose id does not match with the provided id. means ind is not equal to id.
        const updatedItem = items.filter((curElem, ind) => {
            return ind !== id;
        });
        setItems(updatedItem);
    }

    // Remove All Items From List.
    const removeAll = () => {
        setItems([]);
    }
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={todo} alt="" />
                        <figcaption>Add Your List Here</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder="✍️ Add Items..."
                            // from here state will start
                            value={inputData}
                            // latest method to update state
                            onChange={(e) => setInputData(e.target.value)}
                        />
                        <i className="fa fa-plus todo-btn" title="Add Item" onClick={addItem} />
                    </div>
                    <div className="showItems">
                        {/* Loop through on items to show in second state array */}
                        {
                            items.map((curElem, ind) => {
                                return (
                                    <div className="eachItem" key={ind}>
                                        <h3>{curElem}</h3>
                                        <i className="fa fa-trash-alt fa-edit" title="Delete Item" onClick={() => deleteItem(ind)}/>
                                    </div>
                                )
                            })
                        }
                    </div>

                    {/* Clear All Button */}
                    <div className="showItems">
                        <button className="btn" onClick={removeAll}>Remove All</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDo;
