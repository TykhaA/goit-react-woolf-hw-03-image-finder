import { Component } from 'react';
import style from './modal.module.css';

class Modal extends Component {
  handleEsc = ({ code }) => {
    if (code === 'Escape') this.props.toggleModal();
  };
  closeModal = e => {
    if (e.target === e.currentTarget) {
      this.props.toggleModal();
    }
  };
  componentDidMount() {
    document.addEventListener('keydown', this.handleEsc);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEsc);
  }
  render() {
    return (
      <div className={style.overlay} onClick={e => this.closeModal(e)}>
        <div className={style.modal}>
          <img src={this.props.link} alt="" />
        </div>
      </div>
    );
  }
}
export default Modal;
