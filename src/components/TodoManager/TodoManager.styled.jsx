import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  width: 800px;
  padding: 20px;
  margin-top: 20px;

  background-color: #332b00;
  border: 2px solid #f2ab26;
  border-radius: 20px;
`;

const TodoList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Todo = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 600px;
`;

const TodoText = styled.p`
  width: 300px;
  font-size: 20px;
  color: #f2ab26;
  color: ${props => {
    if (props.isCompleted === true) {
      return '#00f90f';
    } else if (props.isCompleted === false) {
      return '#ff0000';
    }
    return '#f2ab26';
  }};
`;

const ChangeIsCompleted = styled.button`
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
    ${props => {
      if (props.isCompleted === true) {
        return 'background-color: #290000;border: 2px solid #c81a00;color: #c81a00;';
      }

      return 'background-color: #003300;border: 2px solid #00f90f;color: #00f90f;';
    }};
  }
`;

const RemoveTodo = styled.button`
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
    background-color: #290000;
    border: 2px solid #c81a00;
    color: #c81a00;
  }
`;

const TodoCounter = styled.p`
  font-size: 20px;
  color: #f2ab26;
`;

export {
  Container,
  TodoList,
  Todo,
  TodoText,
  ChangeIsCompleted,
  RemoveTodo,
  TodoCounter,
};
