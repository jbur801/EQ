import React, { PropsWithChildren, useState } from "react";
import "./styles.css";
import Modal from "react-overlays/Modal";

interface ModalProps {
  heading: string;
  showModal: boolean;
  handleClose: () => void;
  handleSuccess: () => void;
}

/**
 * wrapper for a modal
 * very unhappy with this
 * TODO: fix/remove
 * @param props
 * @param param1
 * @returns
 */
export default function ModalWrapper(props: PropsWithChildren<ModalProps>) {
  const { heading, showModal, handleClose, handleSuccess } = props;

  // Backdrop JSX code
  const renderBackdrop = (
    props: JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLDivElement> &
      React.HTMLAttributes<HTMLDivElement>
  ) => <div className="backdrop" {...props} />;

  return (
    <Modal
      className="modal"
      show={showModal}
      onHide={handleClose}
      renderBackdrop={renderBackdrop}
    >
      <div>
        <div className="modal-header">
          <div className="modal-title">{heading}</div>
          <div>
            <span className="close-button" onClick={handleClose}>
              x
            </span>
          </div>
        </div>
        <div className="modal-desc">{props.children}</div>
        <div className="modal-footer">
          <button className="secondary-button" onClick={handleClose}>
            Close
          </button>
          <button className="primary-button" onClick={handleSuccess}>
            Save Changes
          </button>
        </div>
      </div>
    </Modal>
  );
}
