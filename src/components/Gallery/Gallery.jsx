import { useState, createContext } from 'react';
// Component
import { Container } from './Gallery.styled';
import GalleryForm from './GalleryForm';
import GalleryContainer from './GalleryContainer';
import ModalImage from './ModalImage';

export const ModalImageContext = createContext();

const Gallery = ({ onOpenModalClick, showModal }) => {
  const [searchValue, setSearchValue] = useState('');
  const [imgURL, setImgURL] = useState('');

  return (
    <ModalImageContext.Provider value={setImgURL}>
      <Container>
        <GalleryForm
          onSubmit={newSearchValue => setSearchValue(newSearchValue)}
        />

        <GalleryContainer
          searchValue={searchValue}
          onOpenModalClick={onOpenModalClick}
          showModal={showModal}
        />

        <ModalImage onClose={() => setImgURL('')} imgURL={imgURL} />
      </Container>
    </ModalImageContext.Provider>
  );
};

export default Gallery;

// export default class Gallery extends Component {
//   state = {
//     searchValue: '',
//   };

//   handleSearchSubmit = searchValue => {
//     this.setState({ searchValue });
//   };

//   render() {
//     const { searchValue } = this.state;
//     const { onOpenModalClick, showModal } = this.props;

//     return (
//       <Container>
//         <GalleryForm onSubmit={this.handleSearchSubmit} />

//         <GalleryContainer
//           searchValue={searchValue}
//           onOpenModalClick={onOpenModalClick}
//           showModal={showModal}
//         />
//       </Container>
//     );
//   }
// }
