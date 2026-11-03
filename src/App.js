import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
function App() {
  const [todos,setTodos] = useState([]);
  const [todo,setTodo] = useState();

  function handleAdd() {
setTodos([...todos,todo]);
  }
  function handleDelete(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }
  return (
    <div className="App container">
    <h2>add</h2>
    <input type="text" placeholder="Enter text" onChange={(e) => setTodo(e.target.value)} value={todo}  className=" form-control m-3 center"/>
    <button className="btn btn-primary m-3" onClick={handleAdd}>Add</button>


   <div className="row g-4">
  {todos.map((t, index) => (
    <div key={index} className="col-4">
      <div className="border rounded p-3 text-center h-100">
        <p className="mb-2">{t}</p>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => handleDelete(index)}
        >
          Delete
        </button>
      </div>
    </div>
  ))}
</div>
    </div>
  );
}

export default App;
