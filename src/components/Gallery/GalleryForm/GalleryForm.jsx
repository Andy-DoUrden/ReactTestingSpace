import { Component } from 'react';
import { toast } from 'react-toastify';

import { Form, FormName, NewFormValue, Search } from './GalleryForm.styled';

export default class GalleryForm extends Component {
  state = {
    searchText: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchText.trim() === '') {
      toast.warning('Воу-воу козаче, введи щось)');
      return;
    }

    this.props.onSubmit(this.state.searchText);
    this.setState({ searchText: '' });
  };

  render() {
    const { searchText } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormName>
          Знайди картинки:
          <NewFormValue
            type="text"
            name="searchText"
            value={searchText}
            onChange={this.handleInputChange}
          />
        </FormName>

        <Search type="submit">Шукати</Search>
      </Form>
    );
  }
}
