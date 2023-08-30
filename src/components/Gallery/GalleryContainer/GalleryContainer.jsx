import { useState, useEffect, useMemo, useContext } from 'react';
// Component
import Loader from 'components/Loader';
import { fetchImages } from './helpers';

import { ModalImageContext } from '../Gallery';

import {
  Container,
  GalleryItem,
  GalleryImage,
  LoadMoreBtn,
} from './GalleryContainer.styled';

const START_PAGE = 1;
const START_RESPONSE = [];

const GalleryContainer = ({ searchValue }) => {
  const [response, setResponse] = useState(START_RESPONSE);
  const [loading, setLoading] = useState(false);
  const [localPage, setLocalPage] = useState(START_PAGE);
  const [totalPictures, settotalPictures] = useState(0);

  const loadImages = useMemo(
    () => async (page, images, searchValue) => {
      setLoading(true);
      const newResponse = await fetchImages(page, searchValue);
      setLoading(false);

      setResponse(images.concat(newResponse.data.hits));

      settotalPictures(newResponse.data.totalHits);

      setLocalPage(page);
    },
    []
  );

  useEffect(() => {
    if (searchValue === '') {
      return;
    }

    loadImages(START_PAGE, START_RESPONSE, searchValue);
  }, [searchValue, loadImages]);

  const showModal = useContext(ModalImageContext);

  return (
    <Container>
      {response.map(img => (
        <GalleryItem key={img.id} onClick={() => showModal(img.largeImageURL)}>
          <GalleryImage src={img.webformatURL} />
        </GalleryItem>
      ))}

      <LoadMoreBtn
        onClick={() => loadImages(localPage + 1, response, searchValue)}
        hidden={localPage * 12 > totalPictures}
      >
        Завантажити ще...
      </LoadMoreBtn>

      {loading && <Loader />}
    </Container>
  );
};

export default GalleryContainer;

// export default class GalleryContainer extends Component {
//   state = {
//     response: null,
//     loading: false,
//     localPage: 1,
//     targetImg: '',
//     totalPictures: 0,
//     itemsCounter: 0,
//     isHide: true,
//     showImg: false,
//   };

//   async componentDidUpdate(prevProps, prevState) {
//     if (prevProps.searchValue !== this.props.searchValue) {
//       this.setState({
//         response: null,
//       });

//       const response = await this.fetchImages(1);
//       let hide = false;

//       if (response.data.totalHits - 12 < 12) {
//         hide = true;
//       }

//       this.setState({
//         response: response.data.hits,
//         totalPictures: response.data.totalHits,
//         itemsCounter: 12,
//         isHide: hide,
//       });
//     }
//   }

//   fetchImages = async localPage => {
//     this.setState({ loading: true });

//     const params = {
//       key: '35900010-e6fba30fbbb71a29105fd08a0',
//       q: this.props.searchValue,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       per_page: 12,
//       page: localPage,
//     };

//     try {
//       const response = await axios.get(BASE_URL, { params });
//       return response;
//     } catch (error) {
//       console.log(error);
//     } finally {
//       this.setState({ loading: false });
//     }
//   };

//   onImageClick = url => {
//     this.setState({ targetImg: url });
//     this.props.onOpenModalClick();
//   };

//   onLoadMoreClick = () => {
//     this.setState(({ localPage }) => ({
//       localPage: localPage + 1,
//     }));

//     this.setState(({ itemsCounter }) => ({
//       itemsCounter: itemsCounter + 12,
//     }));

//     setTimeout(async () => {
//       const newResponse = await this.fetchImages(this.state.localPage);

//       this.setState(({ response }) => ({
//         response: response.concat(newResponse.data.hits),
//       }));

//       if (this.state.totalPictures - this.state.itemsCounter < 12) {
//         this.setState({
//           isHide: true,
//         });
//       }
//     }, 0);
//   };

//   openImg = () => {
//     this.setState(({ showImg }) => ({
//       showImg: true,
//     }));
//   };

//   closeImg = () => {
//     this.setState(({ showImg }) => ({
//       showImg: false,
//     }));
//   };

//   render() {
//     const { loading, response, targetImg, isHide, showImg } = this.state;
//     const { onOpenModalClick, showModal } = this.props;

//     return (
//       <Container>
//         {response &&
//           response.map(img => (
//             <GalleryItem
//               key={img.id}
//               onClick={() => this.onImageClick(img.largeImageURL)}
//             >
//               <GalleryImage src={img.webformatURL} />
//             </GalleryItem>
//           ))}

//         <LoadMoreBtn onClick={this.onLoadMoreClick} hidden={isHide}>
//           Завантажити ще...
//         </LoadMoreBtn>

//         {showModal && (
//           <Modal
//             onClose={onOpenModalClick}
//             showImg={showImg}
//             resetImg={this.closeImg}
//           >
//             <GalleryImage src={targetImg} onLoad={this.openImg} />
//           </Modal>
//         )}

//         {loading && (
//           <Oval
//             height={40}
//             width={40}
//             color="#f2ab26"
//             wrapperStyle={{}}
//             wrapperClass=""
//             visible={true}
//             ariaLabel="oval-loading"
//             secondaryColor="#f2ab26"
//             strokeWidth={2}
//             strokeWidthSecondary={2}
//           />
//         )}
//       </Container>
//     );
//   }
// }
