import { useEffect, useState, useRef, useLayoutEffect } from "react";

function App() {
  const [count, setCount] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Tick Tock...");
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("No more Tick Tock...");
    };
  }, []);

  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(data => console.log("Users: ", data.results[0]))
      .catch(err => console.error("Error: ", err));
  }, []);

  useEffect(() => {
    const newWidth = document.getElementById("box")?.offsetWidth || 0;
    setWidth(newWidth);
    console.log("useEffect width:", newWidth);
  }, []);

  useLayoutEffect(() => {
    const newWidth = document.getElementById("box")?.offsetWidth || 0;
    console.log("useLayoutEffect width: ", newWidth);
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return(
    <div style={{
      padding: '2rem'
    }}>
      <h1>React Hooks</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Oompa Loompa
      </button>
      <h2>useRef</h2>
      <input 
        ref={inputRef}
        type="text"
        placeholder="Type here..."
        style={{
          padding: '0.5rem',
          fontSize: '1rem'
        }}
      />
      <h2>useLayoutEffect</h2>
      <div
        id="box"
        style={{
          width: '100%',
          maxWidth: '500px',
          height: '100px',
          backgroundColor: 'skyblue',
          marginBottom: '1rem',
        }}
        >
      </div>
      <p>Box width: {width}px</p>
    </div>
  );
}

export default App;