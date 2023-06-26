import { Component } from 'react';
import { CounterContainer, Value, VisibleDiv } from './Counter.styled';
import { Controls } from './Controls/Controls';

export default class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
    visible: false,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));

    this.setState(prevState => {
      if (prevState.value > 0) {
        return {
          visible: true,
        };
      }
    });
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));

    this.setState(prevState => {
      if (prevState.value <= 0) {
        return {
          visible: false,
        };
      }
    });
  };

  render() {
    const { value } = this.state;

    return (
      <>
        <CounterContainer>
          <Value value={value}>{value}</Value>

          <Controls
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </CounterContainer>

        {this.state.visible && <VisibleDiv>I'M VISIBLE</VisibleDiv>}
      </>
    );
  }
}
