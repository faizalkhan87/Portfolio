import React, { useContext, useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AudioFile } from "././context/sharedContext.js";

export const WelcomeModal = () => {
  const [show, setShow] = useState(true);
  const { audioFile } = useContext(AudioFile);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const play = () => {
    audioFile.play();
  };

  return (
    <>
      <div className="App">
        <Button variant="primary" onClick={handleShow} hidden>
          Launch
        </Button>
        <Modal show={show} onHide={handleClose} onExit={play} centered>
          <Modal.Body className="modalBody" style={{ fontSize: 20 }}>
            Welcome to my portfolio! , a web developer with a passion for solving problems. Let's build something
            amazing together.
            <ProgressBar animated now={95} />
          </Modal.Body>
          <Button
            variant="dark"
            className="modalBody"
            style={{
              borderRadius: 1,
            }}
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal>
      </div>
    </>
  );
};
