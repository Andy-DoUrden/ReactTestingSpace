import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from 'components/Layout';

const Home = lazy(() => import('../../pages/Home'));
const Counter = lazy(() => import('../../pages/CounterPage'));
const ColorPicker = lazy(() => import('../../pages/ColorPickerPage'));
const Gallery = lazy(() => import('../../pages/GalleryPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="counter" element={<Counter />} />

        <Route path="colorpicker" element={<ColorPicker />} />

        <Route path="gallery" element={<Gallery />} />

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
