import React from 'react';
import { useCounter } from '../hooks/useCounter';

const Counter: React.FC = () => {
  const { count, increase, decrease, reset } = useCounter(0);

  return (
    <div style={{
      textAlign: 'center',
      padding: '2rem',
      fontFamily: 'sans-serif',
      maxWidth: 400,
      margin: '0 auto'
    }}>
      <h2>Counter </h2>
      <h3>Count: {count}</h3>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
        marginTop: '1rem'
      }}>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;