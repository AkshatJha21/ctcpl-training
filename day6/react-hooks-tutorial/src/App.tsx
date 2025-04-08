import { useEffect, useRef, useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleValidateEmail = () => {
    if (emailRegex.test(email)) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  };

  const toggleElement = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div
      style={{
        padding: "2rem",
        alignItems: "center",
      }}
    >
      <h1>React Hooks Assignment</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center"
        }}
      >
        <h2>Email Validator</h2>
        <input
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "0.5rem",
            fontSize: "1rem",
          }}
          type="text"
          ref={inputRef}
          value={email}
          placeholder="Enter email..."
        />
        <br />
        <button onClick={handleValidateEmail}>CHECK EMAIL</button>
        {isValidEmail ? <p style={{ color: "lightgreen" }}>✅ VALID EMAIL</p> : <p style={{ color: "red" }}>ENTER A VALID EMAIL</p>}
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center"
        }}
      >
        <h2>Toggle Element</h2>
        <button onClick={toggleElement}>
          {!isVisible ? "Show Element" : "Hide Element"}
        </button>
        <div 
          style={{ 
            opacity: isVisible ? 1 : 0, 
            backgroundColor: 'blue', 
            transition: "opacity 0.25s ease-in-out",
            color: 'white', 
            padding: '40px',
            marginTop: '20px',
            pointerEvents: isVisible ? "auto" : "none",
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
