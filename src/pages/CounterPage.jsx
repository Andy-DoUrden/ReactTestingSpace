import Counter from 'components/Counter';
import Timer from 'components/Clock';

const CounterPage = () => {
  return (
    <>
      <Counter initialValue={0} Timer={Timer} />
    </>
  );
};

export default CounterPage;
