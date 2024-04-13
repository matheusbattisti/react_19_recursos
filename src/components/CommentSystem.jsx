import React, { useState } from "react";
import { useOptimistic } from "react";

const CommentSystem = () => {
  const [comments, setComments] = useState([
    { text: "Olá, eu sou o comentário inicial!", sending: false, key: 1 },
  ]);

  // Configuração do hook useOptimistic
  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (state, newComment) => [
      ...state,
      {
        text: newComment,
        sending: true, // Indica que o comentário está sendo enviado
        key: state.length + 1,
      },
    ]
  );

  // Função para simular o envio de dados com delay
  async function sendCommentData(commentData) {
    const sentComment = await fakeDelayAction(commentData.get("comment"));
    setComments((currentComments) => [
      ...currentComments,
      { text: sentComment, sending: false },
    ]);
  }

  // Simula uma ação com atraso de 2 segundos
  async function fakeDelayAction(comment) {
    await new Promise((res) => setTimeout(res, 2000));
    return comment;
  }

  const handleSubmit = async (event) => {
    const formData = new FormData(event.target);
    addOptimisticComment(formData.get("comment"));
    await sendCommentData(formData);
  };

  return (
    <>
      {optimisticComments.map((comment, index) => (
        <div key={index}>
          {comment.text}
          {comment.sending && <small> (Enviando...)</small>}
        </div>
      ))}
      <form action={handleSubmit}>
        <h1>Sistema de Comentários Otimista</h1>
        <div>
          <label>Comentário</label>
          <input type="text" name="comment" />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default CommentSystem;
