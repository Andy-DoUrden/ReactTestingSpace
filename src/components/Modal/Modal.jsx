import { useEffect, useMemo } from 'react';
// Component
import { createPortal } from 'react-dom';
import { Backdrop, ModalContainer } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, resetImg, showImg, children }) => {
  const handleKeydown = useMemo(
    () => e => {
      if (e.code === 'Escape') {
        onClose();

        resetImg();
      }
    },

    [onClose, resetImg]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [handleKeydown]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();

      resetImg();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalContainer showImg={showImg}>{children}</ModalContainer>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;

// export default class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeydown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeydown);
//   }

//   handleKeydown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();

//       this.props.resetImg();
//     }
//   };

//   handleBackdropClick = e => {
//     if (e.currentTarget === e.target) {
//       this.props.onClose();

//       this.props.resetImg();
//     }
//   };

//   render() {
//     const { showImg } = this.props;

//     return createPortal(
//       <Backdrop onClick={this.handleBackdropClick}>
//         <ModalContainer showImg={showImg}>{this.props.children}</ModalContainer>
//       </Backdrop>,
//       modalRoot
//     );
//   }
// }
