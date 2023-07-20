import {
  Container,
  TodoList,
  Todo,
  TodoText,
  ChangeIsCompleted,
  RemoveTodo,
  TodoCounter,
  ModalBtn,
} from './TodoManager.styled';
import AddTodo from './AddTodo';
import TodoFilter from './TodoFilter';
import Modal from 'components/Modal';

const TodoManager = ({
  todos,
  changeStatus,
  deleteTodo,
  onAddTodoSubmit,
  todoFilterValue,
  onHandleFilterChange,
  onOpenModalClick,
  showModal,
}) => {
  const totalTodosCount = todos.length;

  const completedTodosCount = todos.reduce(
    (acc, todo) => (todo.completed ? acc + 1 : acc),
    0
  );

  return (
    <Container>
      <ModalBtn type="button" onClick={onOpenModalClick}>
        Добавити
      </ModalBtn>

      {showModal && (
        <Modal onClose={onOpenModalClick}>
          <AddTodo onSubmit={onAddTodoSubmit} />
        </Modal>
      )}

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
