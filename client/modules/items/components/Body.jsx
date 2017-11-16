import React from 'react';
import { Col, Panel, Input, Button, Glyphicon, FormGroup, FormControl } from 'react-bootstrap';


class Body extends React.Component {
  render() {

    var containerStyle = {
      fontFamily: '"Lato", sans-serif',
      padding: '30px 0',
      borderTop: '1px solid #ddd',
      overflow: 'hidden'
    };

    var contentHeaderStyle = {
      fontSize: '26px',
      lineHeight: '36px',
      fontWeight: '300',
      margin: '0 0 30px 0',
      textTransform: 'uppercase'
    };

    var contentStyle = {
      fontSize: '20px',
      margin: 0
    };

    return (
      <div className="container-fluid text-center">
        <div className="row">
          <div style={containerStyle}>

            <div className="col-sm-12">
              <h3 style={contentHeaderStyle}>Ground Finder</h3>
              <p style={contentStyle}>

                Demo.

              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Body
