import "./App.css";
import BotaoDeTema from "./components/BotaoDeTema";
import EstadoDoFormulario from "./components/EstadoDoFormulario";
import FormStatus from "./components/FormStatus";
import MensagemApp from "./components/MensagemApp";
import UserForm from "./components/MyForm";
import ParentComponent from "./components/ParentComponent";
import PostItems from "./components/PostItems";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <>
      {/* Meta data - apagar do index.html */}
      <title>Hora de Codar</title>
      <meta name="description" content="Aprenda com Matheus Battisti" />
      {/* 1 - Actions */}
      <h1>1 - Actions</h1>
      <UserForm />
      {/* 2 - ref como prop */}
      <h1>2 - ref como prop</h1>
      <ParentComponent />
      {/* 3 - use para resgate de dados */}
      <h1>3 - use para resgate de dados</h1>
      <PostItems />
      {/* 4 - use para context */}
      <h1>4 - use para context</h1>
      <ThemeProvider>
        <BotaoDeTema />
      </ThemeProvider>
      {/* 5 - Status de envio com useFormStatus */}
      <h1>5 - Status de envio com useFormStatus</h1>
      <FormStatus />
      {/* 6 - atualização baseada em reposta do form com useFormStatus */}
      <h1>6 - atualização baseada em reposta do form com useFormStatus</h1>
      <EstadoDoFormulario />
      {/* 7 - melhorando experiencia do usuário com useOptimistic, atualizando de maneira otimista */}
      <h1>7 - melhorando experiencia do usuário com useOptimistic</h1>
      <MensagemApp />
    </>
  );
}

export default App;
