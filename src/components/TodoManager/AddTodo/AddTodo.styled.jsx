import styled from '@emotion/styled';

const TodoForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  width: 400px;
`;

const FormName = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  font-size: 24px;
  color: #f2ab26;
`;

const NewTodoValue = styled.textarea`
  width: 400px;
  max-width: 400px;
  height: 100px;
  min-height: 60px;
  font-size: 20px;
  padding: 10px;

  background-color: #332b00;
  border-radius: 16px;
  outline: none;
  border: 2px solid#f2ab26;
  color: #f2ab26;

  transition: 300ms;

  :hover,
  :focus {
    border: 2px solid #00f90f;
  }
`;

const AddTodo = styled.button`
  width: 280px;
  height: 60px;

  background-color: #332b00;
  border-radius: 16px;
  outline: none;
  border: 2px solid#f2ab26;
  color: #f2ab26;

  font-size: 20px;

  cursor: pointer;
  transition: 300ms;

  :hover {
    background-color: #002b00;
    border: 2px solid #00f90f;
    color: #00f90f;
  }
`;

export { TodoForm, FormName, NewTodoValue, AddTodo };
