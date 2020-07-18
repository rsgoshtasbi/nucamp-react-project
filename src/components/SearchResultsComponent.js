import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import MemberModal from './MemberModalComponent';

function RenderMemberData({ props, member }) {
  return (
    <div className="container">
      <div className="row">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col-3" className="text-center">
                  Name
                </th>
                <th scope="col-3" className="text-center">
                  Title
                </th>
                <th scope="col-3" className="text-center">
                  Location
                </th>
                <th scope="col-3" className="text-center">
                  Years Experience
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">{member.name}</td>
                <td className="text-center">{member.title}</td>
                <td className="text-center">{member.location}</td>
                <td className="text-center">{member.experience}</td>
                <td className="text-center"><MemberModal member={member} /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function SearchResults(props) {
  const fbPersonnel = props.member.filter(function (person) {
    return person.company === "Facebook";
  });
  const fbResultsRendering = fbPersonnel.map((member) => {
    return (
      <div key={member.id}>
        <RenderMemberData member={member} />
      </div>
    );
  });

  const applePersonnel = props.member.filter(function (person) {
    return person.company === "Apple";
  });
  const appleResultsRendering = applePersonnel.map((member) => {
    return (
      <div key={member.id}>
        <RenderMemberData member={member} />
      </div>
    );
  });

  const amazonPersonnel = props.member.filter(function (person) {
    return person.company === "Amazon";
  });
  const amazonResultsRendering = amazonPersonnel.map((member) => {
    return (
      <div key={member.id}>
        <RenderMemberData member={member} />
      </div>
    );
  });

  return (
    <>
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <h3>Facebook</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>{fbResultsRendering}</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <h3>Apple</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>{appleResultsRendering}</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            <h3>Amazon</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>{amazonResultsRendering}</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
}

export default SearchResults;
