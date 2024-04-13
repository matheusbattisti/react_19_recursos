import React, { useRef, useEffect } from "react";
import InputField from "./InputField";

const ParentComponent = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focar no input logo após o componente ser montado
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <InputField ref={inputRef} placeholder="Digite aqui..." />
    </div>
  );
};

export default ParentComponent;
