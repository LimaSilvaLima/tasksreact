import React, { useState } from "react";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";



function App() {
  
  const [tasks, setTasks] = useState([
    { id: 1, 
    title: "Estudar programação",
    description: "estudar programação .net para teste baresdev full stack",
    isCompleted: false 
  },
  { id: 2, 
    title: "Estudar ingles",
    description: "Revisao de ingles para entrevista turing",
    isCompleted: false 
  },
  { id: 3,
    title: "Escrever petição",
    description: "escrever petição de revisional do cliente Jeferson",
    isCompleted: false 
  } 

  ]);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTasks/>
        <Tasks tasks={tasks}/>
      </div>
    </div>
  );
}

export default App;
