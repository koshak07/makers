import React, { useState } from 'react';

const Counter = () => {

    function getInitialState(){
console.log('******');
return new Date().getDate()
    }


    const [counter, setCounter] = useState(()=> getInitialState())
    const [person, setPerson] = useState({
        name: 'John',
        lasName: 'Snow'
    })
    
    function increment(){
        // setCounter(counter + 1)
        setCounter((prevState)=> prevState + 1)
    }

    function decrement(){
        setCounter(counter - 1)
    }
    function changePerson(){
        setPerson((prev)=>{
            return {
                ...prev,
                name: 'Emily'
            }
        })
    }
    return (
        <div>
            <h1>Счетчик: {counter}</h1>
            <button onClick={increment} className="btn btn-success">+</button>
            <button onClick={decrement} className="btn btn-danger">-</button>
            <button onClick={changePerson} className="btn btn-warning">Изменить имя</button>
            <p>{JSON.stringify(person)}</p>
            
        </div>
    );
};

export default Counter;