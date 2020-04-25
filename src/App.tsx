import React, { useState } from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import { LangSwitcher } from "./LangSwitcher";

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
  const { t } = useTranslation();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val.length >= 5 && val.length <= 20) {
      setError("");
    } else {
      setError(
        t("Name must be between {{__MIN__}} and {{__MAX__}} characters", {
          __MIN__: 5,
          __MAX__: 20,
        })
      );
    }
    setName(val);
  };
  return (
    <div className="App">
      <header className="App-header">
        <LangSwitcher />
        <p>
          {t("Name")}:{" "}
          <input
            style={styles.InputBox}
            value={name}
            onChange={onChange}
            placeholder={t("Type your name")}
          />
        </p>
        <p style={styles.Error}>{error}</p>
      </header>
    </div>
  );
}

export default App;
