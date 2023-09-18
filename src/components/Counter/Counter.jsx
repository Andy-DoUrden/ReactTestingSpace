import { useState, useEffect } from 'react';
// Component
import { CounterContainer, Value } from './Counter.styled';
import { Controls } from './Controls/Controls';
import Clock from 'components/Clock';

const Counter = ({ initialValue }) => {
  const [value, setValue] = useState(initialValue);
  const [visible, setVisible] = useState(() =>
    initialValue > 0 ? true : false
  );
  //? коли нам треба ініціювати стейт з значення що вичисляється то потрібно використовувати стрілку дял того щоб значення не перевичислялось на кожному ререндері

  useEffect(() => {
    if (value > 0) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [value]);

  return (
    <>
      <CounterContainer>
        <Value value={value}>{value}</Value>

        <Controls
          onIncrement={() => setValue(prevState => prevState + 1)}
          onDecrement={() => setValue(prevState => prevState - 1)}
        />
      </CounterContainer>

      {visible && <Clock />}
    </>
  );
};

export default Counter;

// export default class Counter extends Component {
//   static defaultProps = {
//     initialValue: 1,
//   };

//   state = {
//     value: this.props.initialValue,
//     visible: this.props.initialValue > 0 ? true : false,
//   };

//   handleIncrement = () => {
//     this.setState(prevState => ({
//       value: prevState.value + 1,
//     }));

//     this.setState(prevState => {
//       if (prevState.value > 0) {
//         return {
//           visible: true,
//         };
//       }
//     });
//   };

//   handleDecrement = () => {
//     this.setState(prevState => ({
//       value: prevState.value - 1,
//     }));

//     this.setState(prevState => {
//       if (prevState.value <= 0) {
//         return {
//           visible: false,
//         };
//       }
//     });
//   };

//   render() {
//     const { value } = this.state;
//     const { Timer } = this.props;

//     return (
//       <>
//         <CounterContainer>
//           <Value value={value}>{value}</Value>

//           <Controls
//             onIncrement={this.handleIncrement}
//             onDecrement={this.handleDecrement}
//           />
//         </CounterContainer>

//         {this.state.visible && <Timer />}
//       </>
//     );
//   }
// }
