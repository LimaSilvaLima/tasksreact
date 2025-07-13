function AddTasks() {
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      <input type="text" placeholder="Digite o titulo da tarefa" ></input>
      <input type="text" placeholder="Digite a descrição da tarefa" ></input>
    </div>
  );
}

export default AddTasks;
