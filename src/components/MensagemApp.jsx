import { useState } from "react";
import FormularioMensagem from "./FormularioMensagem";

export default function MensagemApp() {
  async function deliverMessage(message) {
    // Simula um delay usando setTimeout encapsulado em uma Promise
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay de 1 segundo

    // Retorna a mensagem como se tivesse sido processada pelo servidor
    return message;
  }
  const [messages, setMessages] = useState([
    { text: "Oi, eu sou a mensagem inicial!", sending: false, key: 1 },
  ]);

  async function sendMessage(formData) {
    const sentMessage = await deliverMessage(formData.get("message"));
    setMessages((messages) => [
      ...messages,
      { text: sentMessage, sending: false },
    ]);
  }

  return <FormularioMensagem messages={messages} sendMessage={sendMessage} />;
}
