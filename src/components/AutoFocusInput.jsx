import React, { useRef, useEffect } from "react";

function AutoFocusInput() {
  const inputRef = useRef(null); // Criação da referência

  useEffect(() => {
    // Focar automaticamente no input quando o componente for montado
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Eu serei focado automaticamente"
    />
  );
}

export default AutoFocusInput;
