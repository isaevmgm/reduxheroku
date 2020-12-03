import {useDispatch, useSelector} from "react-redux";
import {loadTodos, removeTodo} from "./Actions";
import {useEffect} from "react";


function App() {

    const todos = useSelector(state => state.todos);
    const loading = useSelector(state => state.loading);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadTodos())
    }, []);

    const handleDelete = (id) => {
        dispatch(removeTodo(id))
    }

  return (
      <div className="container">
          <div className="header">
              Email addresses:
          </div>
          {loading ? 'Загрузка' : (
              todos.map((todo) => {
                  return(
                      <div className="todo">
                          {todo.email}
                          <div className="add">
                              <button
                                  className="btn"
                                  onClick={() => handleDelete(todo.id)}
                                  disabled={todo.deleting}
                              >
                                  Delete
                              </button>
                          </div>
                      </div>
                  )
              }))}
      </div>
  );
}

export default App;











