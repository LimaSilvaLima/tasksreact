import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";


function Tasks({tasks, onDeleteTaskClick, onTaskClick}) {
  const navigate = useNavigate();

  function onSeeDatailsClick(task) {
    const queryParams = new URLSearchParams();
    queryParams.set("title", task.title);
    queryParams.set("description", task.description);
    navigate(`/task?${queryParams.toString()}`);
    // Redireciona para a página de detalhes da tarefa com os parâmetros de consulta
    //navigate(`/task?title=${task.title}&description=${task.description}`);
  }

  return (
    <div>
      <div>
          <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">{tasks.map((task) =>(
              <li key={task.id} className="flex gap-2">
                <button onClick={() => onTaskClick(task.id)}
                  className={`bg-slate-400 text-left w-full flex items-center gap-2 text-white p-2 rounded-md ${
                    task.isCompleted && "line-through"
                  }`}
                >
                  {task.isCompleted && <CheckIcon/>}
                  {task.title}
                </button>
                <Button onClick={() => onSeeDatailsClick(task)}>
                  <ChevronRightIcon />
                </Button>
                <Button onClick={()=> onDeleteTaskClick(task.id)} >
                  <TrashIcon/>
                </Button>
              </li>
            ))}
          </ul>
      </div>
    </div>
  );
}

export default Tasks;

//para use icone instalar lucide-icons/react
//npm install lucide
//instalar bibliote uuid para trabalhar com aleatorios em javaScript
//npm install uuid
//import { v4 as uuidv4 } from 'uuid'; //para gerar id aleatorio
//const id = uuidv4(); //gerar id aleatorio
//npm i react-router-dom

//api jsonplacerholder
//https://jsonplaceholder.typicode.com/