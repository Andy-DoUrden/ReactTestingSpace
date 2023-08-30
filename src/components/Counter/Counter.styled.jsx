import styled from '@emotion/styled';

const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 800px;
  margin-top: 20px;
  padding: 20px;

  background-color: #332b00;
  border: 2px solid #f2ab26;
  border-radius: 20px;
`;

const Value = styled.span`
  font-size: 50px;
  color: ${props => {
    if (props.value > 0) {
      return '#00f90f';
    } else if (props.value < 0) {
      return '#ff0000';
    }
    return '#f2ab26';
  }};
`;

export { CounterContainer, Value };
