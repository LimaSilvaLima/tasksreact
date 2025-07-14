import { ChevronRightIcon, TrashIcon } from "lucide-react";


function Tasks({tasks, onDeleteTaskClick, onTaskClick}) {
  
  return (
    <div>
      <div>
          <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">{tasks.map((task) =>(
              <li key={task.id} className="flex gap-2">
                <button onClick={() => onTaskClick(task.id)}
                  className={`bg-slate-400 text-left w-full text-white p-2 rounded-md" ${task.isCompleted && "line-through"
                  }`}
                >
                  {task.title}
                </button>
                <button className="bg-slate-400 p-2 rounded-md text-white">
                  <ChevronRightIcon />
                </button>
                <button onClick={()=> onDeleteTaskClick(task.id)} className="bg-slate-400 p-2 rounded-md text-white">
                  <TrashIcon/>
                </button>
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