import { createContext, useState } from "react";

// Criação do objeto de contexto
const ThemeContext = createContext();

// Componente Provedor de Contexto
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("claro"); // Estado inicial do tema

  // Função para alternar o tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "claro" ? "escuro" : "claro"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
