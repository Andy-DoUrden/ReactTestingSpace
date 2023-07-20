import { PureComponent } from 'react';
import {
  Container,
  SelectedColor,
  ColorSpan,
  ButtonContainer,
  ColorBlock,
} from './ColorPicker.styled';

export default class ColorPicker extends PureComponent {
  state = {
    activeOptionIdx: 1,
  };

  //? або використовувати PureComponent - це для того щоб не ререндерилось то що ти вже вибрав
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.activeOptionIdx !== this.state.activeOptionIdx;
  // }

  setActiveBtn = index => {
    this.setState(() => ({ activeOptionIdx: index }));
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { colors } = this.props;
    const activeOption = this.props.colors[activeOptionIdx];

    return (
      <>
        <Container>
          <SelectedColor>
            Selected color:{' '}
            <ColorSpan color={activeOption.color}>
              {activeOption.label}
            </ColorSpan>
          </SelectedColor>
          <ButtonContainer>
            {colors.map(({ label, color }, index) => (
              <ColorBlock
                key={label}
                blockColor={color}
                onClick={() => this.setActiveBtn(index)}
                currentIndex={index}
                activeIdx={activeOptionIdx}
              />
            ))}
          </ButtonContainer>
        </Container>
      </>
    );
  }
}
