import styled from '@emotion/styled';

const Container = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;

  width: 700px;
  padding: 20px;
  margin-top: 20px;

  border: 2px solid #f2ab26;
  border-radius: 20px;
`;

const GalleryItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 200px;
  height: 150px;

  border: 2px solid #f2ab26;
  border-radius: 20px;
  overflow: hidden;

  transition: 300ms;

  :hover {
    border-color: #00f90f;
    scale: 1.05;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  border-radius: 20px;
`;

const LoadMoreBtn = styled.button`
  width: 280px;
  height: 60px;

  background-color: #332b00;
  border-radius: 16px;
  outline: none;
  border: 2px solid#f2ab26;
  color: #f2ab26;

  font-size: 20px;

  cursor: pointer;
  transition: 300ms;

  :hover {
    background-color: #002b00;
    border: 2px solid #00f90f;
    color: #00f90f;
  }
`;

export { Container, GalleryItem, GalleryImage, LoadMoreBtn };
