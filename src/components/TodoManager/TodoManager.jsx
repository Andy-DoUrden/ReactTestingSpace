import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, toggleCompleted } from 'redux/todosSlice';
import { getTodos } from 'redux/selectors';

import {
  Container,
  TodoList,
  Todo,
  TodoText,
  ChangeIsCompleted,
  RemoveTodo,
  TodoCounter,
} from './TodoManager.styled';

import AddTodo from './AddTodo';
import TodoFilter from './TodoFilter';

const TodoManager = () => {
  const todos = useSelector(getTodos).items;
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();

  const totalTodosCount = todos.length;

  const completedTodosCount = todos.reduce(
    (acc, todo) => (todo.completed ? acc + 1 : acc),
    0
  );

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const filteredTodos = () => {
    const normalizedFilterValue = filter.toLowerCase();

    return todos.filter(todo =>
      todo.task.toLowerCase().includes(normalizedFilterValue)
    );
  };

  const visibleTodos = filteredTodos();

  return (
    <Container>
      <AddTodo />

      <TodoFilter value={filter} onHandleChange={changeFilter} />

      <TodoList>
        {visibleTodos.map(({ id, task, completed }) => (
          <Todo key={id}>
            <TodoText isCompleted={completed}>{task}</TodoText>

            <ChangeIsCompleted onClick={() => dispatch(toggleCompleted(id))}>
              {completed ? 'Готово' : 'В процесі'}
            </ChangeIsCompleted>

            <RemoveTodo onClick={() => dispatch(deleteTodo(id))}>
              Видалити
            </RemoveTodo>
          </Todo>
        ))}
      </TodoList>

      <TodoCounter>Загальна к-сть завдань: {totalTodosCount}</TodoCounter>

      <TodoCounter>К-сть виконаних завдань: {completedTodosCount}</TodoCounter>
    </Container>
  );
};

export default TodoManager;
