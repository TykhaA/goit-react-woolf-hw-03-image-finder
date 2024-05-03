import { instance } from './api';

export const getImageApi = async (value, page) => {
  const { data } = await instance.get(
    `?key=42309515-7c9611a24bfcb09e365820ed6&q=${value}&image_type=photo&orientation=horizontal&=true&per_page=40&page=${page}`
  );
  return data;
};
