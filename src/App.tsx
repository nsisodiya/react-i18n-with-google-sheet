import React, { useState } from "react";
import "./App.css";

const styles = {
  InputBox: {
    padding: 4,
  },
  Error: {
    color: "red",
  },
};

function App() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val.length >= 5 && val.length <= 20) {
      setError("");
    } else {
      setError("Name must be between 5 to 20 characters");
    }
    setName(val);
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Name:{" "}
          <input
            style={styles.InputBox}
            value={name}
            onChange={onChange}
            placeholder="Type your name"
          />
        </p>
        <p style={styles.Error}>{error}</p>
      </header>
    </div>
  );
}

export default App;
