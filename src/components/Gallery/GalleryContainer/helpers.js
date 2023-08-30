import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async (localPage, searchValue) => {
  const params = {
    key: '35900010-e6fba30fbbb71a29105fd08a0',
    q: searchValue,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    page: localPage,
  };

  return axios.get(BASE_URL, { params });
};
