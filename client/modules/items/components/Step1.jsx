import React from 'react';
import {Button, Modal, ButtonGroup, Glyphicon} from 'react-bootstrap';

const Step1 = React.createClass({
  getInitialState() {
    return { show: false };
  },

  render() {
    let close = () => this.setState({ show: false });

    return (
      <div className="modal-container" style={{ height: 200 }}>
        <ButtonGroup>
        <Button
          bsStyle="primary"
          onClick={() => this.setState({ show: true })}
        >
        BOOK NOW
        </Button>
        <Modal
          show={this.state.show}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Book your Match</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>
        <Button>
        <Glyphicon glyph="star-empty"> Favorite</Glyphicon>
        </Button>
        <Button>
        <Glyphicon glyph="share"> Share</Glyphicon>
        </Button>
        </ButtonGroup>

      </div>
    );
  },
});

export default Step1;
