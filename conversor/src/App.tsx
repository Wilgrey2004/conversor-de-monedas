

import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [resultado, setResultado] = useState<number | string>("");

  const [inputValor, setInputValor] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget) {
      setInputValor(e.currentTarget.value);
    }
  };

  const handleClick = () => {
    if (inputRef.current) {
      const inputValue = inputRef.current.value;

      const numero = parseFloat(inputValue);

      if (!isNaN(numero)) {
        setResultado((numero / 60.81).toFixed(2)); // Redondea a dos decimales
      } else {
        setResultado("Valor inválido");
      }
    }
  };

  return (
    <div
      className={
        "flex flex-col justify-center items-center border-2 border-green-500 h-screen"
      }
    >
      <input
        onChange={handleChange}
        ref={inputRef}
        type="number"
        placeholder="Ingresa la cantidad aquí"
        className={
          "m-4 p-2 border-2 rounded-lg placeholder:text-black focus:text-center text-center focus" +
          `${
            inputValor !== ""
              ? "focus:border-2 focus:border-green-600"
              : " focus:border-2 focus:border-red-600"
          } ` +
          `${
            inputValor !== ""
              ? "border-2 border-green-600"
              : "border-2 border-red-600"
          } `
        }
      />
      <button
        className={`transition hover:-translate-y-1 border-2  rounded-2xl p-2 border-blue-950 bg-blue-800 text-white`}
        onClick={handleClick}
      >
        Calcular
      </button>
      <h1>{resultado === "" ? "" : resultado + "$"}</h1>
    </div>
  );
}

export default App;
