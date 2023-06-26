import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  width: 800px;
  min-height: 120px;
  margin-top: 20px;
  padding: 20px 0;

  background-color: #332b00;
  border: 2px solid #f2ab26;
  border-radius: 20px;
`;

const SelectedColor = styled.h2`
  font-size: 20px;
  color: #f2ab26;
`;

const ColorSpan = styled.span`
  font-size: 20px;
  color: ${props => {
    return props.color;
  }};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const ColorBlock = styled.button`
  display: flex;

  width: 60px;
  height: 60px;
  background-color: ${props => props.blockColor};
  border: 2px solid white;
  outline: none;

  cursor: pointer;
  transition: 300ms;
  scale: ${props => {
    if (props.currentIndex === props.activeIdx) {
      return 1.2;
    }
    return 1;
  }};
`;

export { Container, SelectedColor, ColorSpan, ButtonContainer, ColorBlock };
