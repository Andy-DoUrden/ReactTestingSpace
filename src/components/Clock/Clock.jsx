import { useState, useEffect, useRef } from 'react';
// Component
import { ClockContainer } from './Clock.styled';

const Clock = () => {
  const [time, setTime] = useState(() => new Date().toLocaleTimeString());

  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000
    );

    return () => clearInterval(intervalId);
  }, []);

  return <ClockContainer>{time}</ClockContainer>;
};

export default Clock;

// let intervalId = null;

// export default class Clock extends Component {
//   state = {
//     time: new Date().toLocaleTimeString(),
//   };

//   componentDidMount() {
//     this.intervalId = setInterval(
//       () => this.setState({ time: new Date().toLocaleTimeString() }),
//       1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(intervalId);
//   }

//   render() {
//     return <ClockContainer>{this.state.time}</ClockContainer>;
//   }
// }
