import {useDispatch, useSelector} from "react-redux";
import {loadTodos} from "./Actions";
import {useEffect} from "react";


function App() {

    const todos = useSelector(state => state.todos);
    const loading = useSelector(state => state.loading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTodos());
    }, []);




  return (
      <div className='main'>
          <div className='person-data'>
              Data:
          </div>
          <div className='block'>
              {loading ? 'идет загрузка...' : (
                  todos.map (todo => {
                      return(
                          <div>
                              <div className='elem'>
                                  <span className='element'>ID:</span> {todo.id}
                              </div>
                              <div className='elem'>
                                  <span className='element'>Title:</span> {todo.title}
                              </div>
                              <div className='elemc'>
                                  <span className='elementc'>Body:</span> {todo.body}
                              </div>
                          </div>
                      )
                  }))}
          </div>
      </div>
  );
}

export default App;
