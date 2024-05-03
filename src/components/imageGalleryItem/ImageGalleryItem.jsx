import style from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ imageList, handleModal }) => {
  return imageList.map(elem => {
    return (
      <li
        className={style.ImageGalleryItem}
        onClick={() => handleModal(elem.largeImageURL)}
        key={elem.id}
      >
        <img
          className={style.imageGalleryItem_image}
          src={elem.webformatURL}
          alt=""
        />
      </li>
    );
  });
};

export default ImageGalleryItem;
