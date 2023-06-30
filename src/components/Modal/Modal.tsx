import React from "react";
import { GrFormClose } from "react-icons/gr";

import "./Modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <div data-testid="modal-wrapper" className="modal-wrapper">
      <div data-testid="overlay" className="overlay" onClick={() => onClose(false)} />
      <div className="modal">
        <div className="modal-heading">
          <h3>Custom Modal</h3>
          <div
            className="close"
            data-testid="close-button"
            onClick={() => onClose(false)}
          >
            <GrFormClose />
          </div>
        </div>
        <div className="modal-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            a at eaque atque impedit, voluptates doloribus deleniti consequatur
            modi nemo cupiditate eligendi ipsam voluptatem sint maxime explicabo
            alias. Eligendi, pariatur.
          </p>
          {isOpen && <p>Modal is open</p>}
        </div>
        <div className="modal-footer"></div>
      </div>
    </div>
  );
};

export default Modal;
