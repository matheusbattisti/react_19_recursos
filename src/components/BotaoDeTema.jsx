import { use } from "react";
import { ThemeContext } from "../context/ThemeContext";

const BotaoDeTema = () => {
  const { theme, toggleTheme } = use(ThemeContext); // Usando o hook 'use()'

  return (
    <button onClick={toggleTheme} className={`botao-tema ${theme}`}>
      Alternar para tema {theme === "claro" ? "escuro" : "claro"}
    </button>
  );
};

export default BotaoDeTema;
