import { Component } from 'react';
import style from './modal.module.css';

class Modal extends Component {
  state = {};
  handleEsc = ({ code }) => {
    if (code === 'Escape') this.props.toggleModal();
  };
  componentDidMount() {
    document.addEventListener('keydown', this.handleEsc);
  }
  render() {
    return (
      <div className={style.overlay} onClick={this.props.toggleModal}>
        <div className={style.modal}>
          <img src={this.props.link} alt="" />
        </div>
      </div>
    );
  }
}
export default Modal;
