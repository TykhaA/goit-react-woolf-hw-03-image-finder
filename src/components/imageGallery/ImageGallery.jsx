import style from './imageGallery.module.css';

const ImageGallery = ({ children }) => {
  return <ul className={style.imageGallery}>{children}</ul>;
};
export default ImageGallery;
