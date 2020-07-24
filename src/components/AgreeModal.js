            
            
    handleAgreeModal = () => {
        this.setState({
          agree: !this.state.agree,
        });
      };
  
            
            <React.Fragment>
            <Button outline onClick={this.handleAgreeModal}>
              <i className="fa fa-pencil fa-lg" /> Terms and Conditions
            </Button>
            <Modal
              isOpen={this.state.agree}
              toggle={this.handleAgreeModal}
            >
              <ModalHeader toggle={this.handleCommentModal}>
                Terms and Conditions
              </ModalHeader>
              <ModalBody>
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                  <div className="form-group">
                    <Label htmlfor="text">Comment</Label>
                    <Control.textarea
                      rows="6"
                      model=".text"
                      id="text"
                      name="text"
                      className="form-control"
                    />
                  </div>
                </LocalForm>
                <Button type="submit" value="submit" color="primary">
                  I have read the terms and conditions.
                </Button>
              </ModalBody>
            </Modal>
          </React.Fragment>