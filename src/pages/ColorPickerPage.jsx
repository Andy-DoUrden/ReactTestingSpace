import ColorPicker from 'components/ColorPicker';

const colorPack = [
  { label: 'red', color: '#aa0000' },
  { label: 'blue', color: '#0077ff' },
  { label: 'green', color: '#008800' },
  { label: 'pink', color: '#aa00aa' },
  { label: 'lasure', color: '#00bb8c' },
];

const ColorPickerPage = () => {
  return (
    <>
      <ColorPicker colors={colorPack} />
    </>
  );
};

export default ColorPickerPage;
