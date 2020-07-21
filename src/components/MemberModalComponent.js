import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

function RenderMemberSkills({ member }) {
  const filterSkills = member.skills.filter(function (person) {
    return person.skills !== "";
  });
  const filteredMemberSkills = filterSkills.map((member) => {
    return (
      <div key={member.id}>
        <h6>Skills</h6>
        <p>{member.skills.css}</p>
      </div>
    );
  });

  if (filterSkills === true) {
    return (
      <>
        <h5>Skills</h5>
        {filteredMemberSkills}
      </>
    );
  } else {
    return <div></div>;
  }
}

function RenderMemberModal({ member }) {
  return (
    <>
      <Modal.Header closeButton>
        <div className="container">
          <div className="row">
            <div className="col-xs-2">
              <Image src={member.image} alt={`${member.name} profile`} height="100" roundedCircle />
            </div>
            <div className="col-5">
              <h3>{member.name}</h3>
              <p>{member.location}</p>
            </div>
          </div>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-lg-4">
              <h5>{member.title}</h5>
              <p>Years of experience: {member.experience}</p>
              <span>{RenderMemberSkills}</span>
              <h6>Contact Me</h6>
              <p>
                Email:
                <a href={`mailto:${member.email}`}> {member.email}</a>
              </p>
              <a
                className="btn btn-social-icon btn-instagram"
                href={member.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram" />
              </a>{" "}
              <a
                className="btn btn-social-icon btn-facebook"
                href={member.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook" />
              </a>{" "}
              <a
                className="btn btn-social-icon btn-twitter"
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-twitter" />
              </a>{" "}
              <a
                className="btn btn-social-icon btn-linkedin"
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin" />
              </a>
            </div>
            <div className="col-12 d-lg-none">
              <br />
            </div>
            <div className="col">
              <h5>About Me</h5>
              <p>{member.about}</p>
            </div>
          </div>
        </div>
      </Modal.Body>
    </>
  );
}

function MemberModal({ member }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow}>Contact</Button>
      <Modal
        {...member}
        size="lg"
        aria-labelledby="contained-modal-tittle-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <RenderMemberModal member={member} />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MemberModal;
