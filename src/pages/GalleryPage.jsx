import { useState } from 'react';

import Gallery from 'components/Gallery';

const GalleryPage = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  return (
    <>
      <Gallery onOpenModalClick={toggleModal} showModal={showModal} />
    </>
  );
};

export default GalleryPage;
