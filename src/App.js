import React, {useState} from 'react'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <div>count: {count}</div>
      <button>+1</button>
    </>
  );
}

export default App;
