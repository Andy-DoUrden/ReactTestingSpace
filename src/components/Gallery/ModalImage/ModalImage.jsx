import { useEffect, useState } from 'react';
import { GalleryImage } from './ModalImage.styled';
import Modal from 'components/Modal';

const ModalImage = ({ onClose, imgURL }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!imgURL) {
      setIsLoading(true);
    }
  }, [imgURL]);

  if (!imgURL) {
    return '';
  }

  return (
    <Modal onClose={onClose} showImg={!isLoading} resetImg={onClose}>
      <GalleryImage src={imgURL} onLoad={() => setIsLoading(false)} />
    </Modal>
  );
};

export default ModalImage;
