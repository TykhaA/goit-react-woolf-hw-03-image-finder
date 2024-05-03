import ImageGallery from './imageGallery/ImageGallery';
import Header from './header/Header';
import ImageGalleryItem from './imageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { getImageApi } from 'api/imageList';
import Loader from './loader/Loader';
import Modal from './modal/Modal';
import Button from './button/Button';
class App extends Component {
  state = {
    imageList: [],
    isLoading: false,
    error: '',
    fetching: false,
    searchValue: '',
    searchPage: 1,
    isShowModal: false,
    link: '',
    isShowBtn: false,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.fetching) {
      this.getImage();
    }
  }

  getImage = async () => {
    try {
      this.setState({ isLoading: true });
      const data = await getImageApi(
        this.state.searchValue,
        this.state.searchPage
      );
      this.setState(prev => ({
        imageList: [...prev.imageList, ...data.hits],
        isLoading: false,
        isShowBtn: !!data.hits.length,
      }));
    } catch (error) {
      this.setState({ isLoading: false, error: error.message });
    }
  };
  handleChange = value => {
    this.setState({ imageList: [], searchValue: value }, this.getImage);
  };
  handleModal = src => {
    this.setState({ link: src });
    this.toggleModal();
  };
  toggleModal = () => {
    this.setState(prev => ({ isShowModal: !prev.isShowModal }));
  };
  handleLoadMore = () => {
    this.setState(prev => ({ searchPage: prev.searchPage + 1 }), this.getImage);
  };

  render() {
    const { isLoading, error, isShowModal, isShowBtn } = this.state;
    return (
      <>
        {isLoading && <Loader />}
        {error && <h1>Sorry, something went wrong</h1>}
        <Header handleChange={this.handleChange} />
        <ImageGallery>
          <ImageGalleryItem
            imageList={this.state.imageList}
            handleModal={this.handleModal}
          />
        </ImageGallery>
        {isShowBtn && <Button handleLoadMore={this.handleLoadMore} />}

        {isShowModal && (
          <Modal link={this.state.link} toggleModal={this.toggleModal} />
        )}
      </>
    );
  }
}
export default App;
