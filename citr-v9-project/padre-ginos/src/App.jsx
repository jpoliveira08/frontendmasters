import React from 'react';
import ReactDOM from 'react-dom/client';
import Pizza from './Pizza';

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza name="Pepperoni" description="pep, chesse, n stuff" />
      <Pizza name="Hawaiian" description="ham, pineapple, n stuff" />
      <Pizza name="Americano" description="french fries, hot dogs, n stuff" />
    </div>
  )
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
