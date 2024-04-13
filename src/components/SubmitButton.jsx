import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus(); // Hook para obter o status do envio do formulário

  console.log(pending);

  return (
    <button type="submit" disabled={status.pending}>
      {pending ? "Enviando..." : "Enviar"}
    </button>
  );
};

export default SubmitButton;
