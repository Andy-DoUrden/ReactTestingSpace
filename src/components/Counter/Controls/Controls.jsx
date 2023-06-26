import { ControlsWrapper, ControlBtn } from './Controls.styled';

export const Controls = ({ onIncrement, onDecrement }) => (
  <ControlsWrapper>
    <ControlBtn type="button" onClick={onDecrement}>
      Зменшити на 1
    </ControlBtn>
    <ControlBtn type="button" onClick={onIncrement}>
      Збільшити на 1
    </ControlBtn>
  </ControlsWrapper>
);
