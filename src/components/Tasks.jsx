function Tasks(props) {
  
  return (
    <div>
      <div>
          <h1>{props.tasks.map((task) =>(
            <p>{task.title}</p>
            ))}
          </h1>
      </div>
    </div>
  );
}

export default Tasks;