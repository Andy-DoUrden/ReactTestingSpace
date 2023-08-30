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

const TodoManager = ({
  todos,
  changeStatus,
  deleteTodo,
  onAddTodoSubmit,
  todoFilterValue,
  onHandleFilterChange,
}) => {
  const totalTodosCount = todos.length;

  const completedTodosCount = todos.reduce(
    (acc, todo) => (todo.completed ? acc + 1 : acc),
    0
  );

  return (
    <Container>
      <AddTodo onSubmit={onAddTodoSubmit} />

      <TodoFilter
        value={todoFilterValue}
        onHandleChange={onHandleFilterChange}
      />

      <TodoList>
        {todos.map(({ id, task, completed }) => (
          <Todo key={id}>
            <TodoText isCompleted={completed}>{task}</TodoText>

            <ChangeIsCompleted onClick={() => changeStatus(id, completed)}>
              {completed ? 'Готово' : 'В процесі'}
            </ChangeIsCompleted>

            <RemoveTodo onClick={() => deleteTodo(id)}>Видалити</RemoveTodo>
          </Todo>
        ))}
      </TodoList>

      <TodoCounter>Загальна к-сть завдань: {totalTodosCount}</TodoCounter>

      <TodoCounter>К-сть виконаних завдань: {completedTodosCount}</TodoCounter>
    </Container>
  );
};

export default TodoManager;
