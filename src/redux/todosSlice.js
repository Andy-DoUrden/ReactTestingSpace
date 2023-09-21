import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import shortid from 'shortid';

const defaultTodosPack = [
  { id: 'id-1', task: 'Завершити блок HTML', completed: true },
  { id: 'id-2', task: 'Завершити блок CSS', completed: true },
  { id: 'id-3', task: 'Завершити блок JS', completed: true },
  { id: 'id-4', task: 'Завершити блок REACT', completed: false },
  { id: 'id-5', task: 'Завершити блок NODEJS', completed: false },
];

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: defaultTodosPack,
  },
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            id: shortid.generate(),
            task: text,
            completed: false,
          },
        };
      },
    },
    deleteTodo(state, action) {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
    toggleCompleted(state, action) {
      for (const todo of state.items) {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
          break;
        }
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleCompleted } = todosSlice.actions;

const persistConfig = {
  key: 'root',
  storage,
};

export const todosReducer = persistReducer(persistConfig, todosSlice.reducer);
