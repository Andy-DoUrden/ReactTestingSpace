import { useState } from 'react';
// Component
import { toast } from 'react-toastify';

import { Form, FormName, NewFormValue, Search } from './GalleryForm.styled';

const GalleryForm = ({ onSubmit }) => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = e => {
    const { value } = e.currentTarget;
    setSearchText(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchText.trim() === '') {
      toast.warning('Воу-воу козаче, введи щось)');
      return;
    }

    onSubmit(searchText);
    setSearchText('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormName>
        Знайди картинки:
        <NewFormValue
          type="text"
          name="searchText"
          value={searchText}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </FormName>

      <Search type="submit">Шукати</Search>
    </Form>
  );
};

export default GalleryForm;

// export default class GalleryForm extends Component {
//   state = {
//     searchText: '',
//   };

//   handleInputChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     if (this.state.searchText.trim() === '') {
//       toast.warning('Воу-воу козаче, введи щось)');
//       return;
//     }

//     this.props.onSubmit(this.state.searchText);
//     this.setState({ searchText: '' });
//   };

//   render() {
//     const { searchText } = this.state;

//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <FormName>
//           Знайди картинки:
//           <NewFormValue
//             type="text"
//             name="searchText"
//             value={searchText}
//             onChange={this.handleInputChange}
//             autoComplete="off"
//           />
//         </FormName>

//         <Search type="submit">Шукати</Search>
//       </Form>
//     );
//   }
// }
