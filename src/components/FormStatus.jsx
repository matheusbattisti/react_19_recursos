import SubmitButton from "./SubmitButton";

const FormStatus = () => {
  const formAction = async (formData) => {
    // Simula um delay de 3 segundos para o envio do formulário
    await new Promise((resolve) => setTimeout(resolve, 3000));
    alert("E-mail recebido: " + formData.get("email"));
  };

  return (
    <form action={formAction}>
      <input type="email" name="email" placeholder="Digite seu e-mail" />
      <SubmitButton />
    </form>
  );
};

export default FormStatus;
