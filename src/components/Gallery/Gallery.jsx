import { Component } from 'react';

import { Container } from './Gallery.styled';
import GalleryForm from './GalleryForm';
import GalleryContainer from './GalleryContainer';

export default class Gallery extends Component {
  state = {
    searchValue: '',
  };

  handleSearchSubmit = searchValue => {
    this.setState({ searchValue });
  };

  render() {
    const { searchValue } = this.state;
    const { onOpenModalClick, showModal } = this.props;

    return (
      <Container>
        <GalleryForm onSubmit={this.handleSearchSubmit} />

        <GalleryContainer
          searchValue={searchValue}
          onOpenModalClick={onOpenModalClick}
          showModal={showModal}
        />
      </Container>
    );
  }
}
