import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

function RenderFacebookData({ member }) {
  // if (member === "facebook") {
    return (
    <div className="container">
      <div className="row">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="text-center">
                  Name
                </th>
                <th scope="col" className="text-center">
                  Title
                </th>
                <th scope="col" className="text-center">
                  Location
                </th>
                <th scope="col" className="text-center">
                  Years Experience
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">member.name</td>
                <td className="text-center">member.title</td>
                <td className="text-center">member.locaiton</td>
                <td className="text-center">member.experience</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
    // }
    // return <div />
}

function SearchResults(props) {
     return (
      <>
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <h3>Facebook</h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <RenderFacebookData />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              <h3>Apple</h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </>
    );
}

export default SearchResults;