import React, { createContext, useContext, useState } from 'react';

// Step 1: Create a Context
const CounterContext = createContext();

// Step 2: Set up a Provider
const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

// Step 3: Access the Context
const CounterDisplay = () => {
  const { count } = useContext(CounterContext);

  return <div>Count: {count}</div>;
};

const CounterButtons = () => {
  const { increment, decrement } = useContext(CounterContext);

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

// Step 4: Wrap your Components
const contextApp = () => {
  return (
    <CounterProvider>
      <CounterDisplay />
      <CounterButtons />
    </CounterProvider>
  );
};

export default contextApp;