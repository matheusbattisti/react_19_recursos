import { useRef, useOptimistic } from "react";

function FormularioMensagem({ messages, sendMessage }) {
  const formRef = useRef();
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [...state, { text: newMessage, sending: true }]
  );

  async function formAction(formData) {
    addOptimisticMessage(formData.get("message"));
    formRef.current.reset();
    await sendMessage(formData);
  }

  return (
    <>
      {optimisticMessages.map((message, index) => (
        <div key={index}>
          {message.text}
          {!!message.sending && <small> (Enviando...)</small>}
        </div>
      ))}
      <form action={formAction} ref={formRef}>
        <input type="text" name="message" placeholder="Digite algo!" />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default FormularioMensagem;
