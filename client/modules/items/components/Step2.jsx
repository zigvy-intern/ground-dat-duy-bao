import React from 'react';
import {Button, Modal,Nav,Grid,Thumbnail, ButtonGroup,Navbar, Glyphicon,Container, Row, Col} from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';
import Map from '../../items/components/Map.jsx';

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
            <Modal.Title id="contained-modal-title">Completed</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div>
            <img src="https://imgur.com/bNh6Djy.png" height="50" width="auto"/>
            <br/>
            <br/>
            <p>Your Booking has been Issued!</p>
            <Navbar>
            <Grid>
            <Row>
            <Nav step2Left>
            <Col xs={12} md={15}>
              <Thumbnail style={{width:"150",height:"150"}}>
              <Map/>
              </Thumbnail>
            </Col>
            </Nav>

            <Nav step2Right>
            <Col xs={9} md={3}>
              <p>Dia chi</p>
            </Col>
            </Nav>
            </Row>
            </Grid>
            </Navbar>
          </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Finish</Button>
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
