import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";



function RenderMemberModal({ member}) {
  return (
    <>
  <Modal.Header closeButton>
          <div className="container">
            <div className="row">
              <div className="col-xs-2">
                <img
                  src={member.image}
                  className="avatar"
                  alt={`${member.name} profile image`}
                  height="75"
                />
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
                <h6>Contact Me</h6>
                <p>
                  Email:
                  <a href={member.email}> {member.email}</a>
                </p>
                <a className="btn btn-social-icon btn-instagram" href="{member.social.instagram}">
                  <i className="fa fa-instagram" />
                </a>{" "}
                <a className="btn btn-social-icon btn-facebook" href="{member.social.facebook}">
                  <i className="fa fa-facebook" />
                </a>{" "}
                <a className="btn btn-social-icon btn-twitter" href="{member.social.twitter}">
                  <i className="fa fa-twitter" />
                </a>{" "}
                <a className="btn btn-social-icon btn-linkedin" href="{member.social.linkedin}">
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
  )
}


function MemberModal({member}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
          
    return (
      <>
        <Button onClick={handleShow}>Contact</Button>
        <Modal className="mt-5" size="lg" show={show} onHide={handleClose}>
          <RenderMemberModal member={member} />
          <p>text</p>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
    }

export default MemberModal;
