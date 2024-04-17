import React, { useFormState } from "react-dom";

const EstadoDoFormulario = () => {
  const validarUsuario = (prevState, dadosDoFormulario) => {
    const nome = dadosDoFormulario.get("nomeUsuario"); // Captura o nome de usuário do formulário
    console.log(prevState); // Estado anterior do formulário
    if (nome === "João") {
      return {
        success: true,
        text: "Bem-vindo, João!",
      };
    } else {
      return {
        success: false,
        text: "Erro: Usuário não reconhecido.",
      };
    }
  };

  const [mensagem, acaoDoFormulario] = useFormState(validarUsuario, null);

  return (
    <form action={acaoDoFormulario}>
      <label>Nome</label>
      <input type="text" name="nomeUsuario" />
      <button type="submit">Enviar</button>
      {mensagem && <h3>{mensagem.text}</h3>}
    </form>
  );
};

export default EstadoDoFormulario;
