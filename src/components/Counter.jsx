import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)


    function increment () {
        setCount(count + 1)

    }
    function decrement () {
        setCount(count - 1)
    }

    return (
        <div className='App'>
            <h1>{count}</h1>
            <button onClick={increment}>Увеличить</button>
            <button onClick={decrement}>Уменьшшить</button>
        </div>
    );
};

export default Counter;
