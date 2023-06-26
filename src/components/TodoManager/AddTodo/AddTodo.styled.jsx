import styled from '@emotion/styled';

const TodoForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 600px;
`;

const FormName = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  font-size: 20px;
  color: #f2ab26;
`;

const NewTodoValue = styled.input`
  width: 240px;
  height: 40px;
  font-size: 20px;
  padding: 0 10px;

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
  width: 120px;
  height: 40px;

  background-color: #332b00;
  border-radius: 16px;
  outline: none;
  border: 2px solid#f2ab26;
  color: #f2ab26;

  font-size: 20px;

  cursor: pointer;
  transition: 300ms;

  :hover {
    background-color: #003300;
    border: 2px solid #00f90f;
    color: #00f90f;
  }
`;

export { TodoForm, FormName, NewTodoValue, AddTodo };
