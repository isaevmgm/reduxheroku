import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Styles.css';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

const initialState = {
    todos: [],
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'load':
            return {
                ...state,
                todos: action.payload,
                loading: false
            }

        case 'start':
            return {
                ...state,
                loading: true
            }

        case 'delete':
            return {
                ...state,
                todos: state.todos.filter((todo) => {
                    if(todo.id === action.payload) {
                        return false
                    }

                    return true
                })
            }

        case 'email_deleting':
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if(todo.id === action.payload) {
                        return {
                            ...todo,
                            deleting: true
                        }
                    }

                    return todo
                })
            }

        default:
            return state;
    }
}



const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
