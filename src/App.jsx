import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";



function App() {



  return (
    <div>
      <h1 className="text-red-500">Gerenciador de Tarefas</h1>
      <h1 className="text-3xl font-bold underline">Testando configuração do tailwindcss</h1>
      <AddTasks/>
      <Tasks />
    </div>
  );
}

export default App;
// npm i autoprefixer
//npm install tailwindcss @tailwindcss/postcss postcss