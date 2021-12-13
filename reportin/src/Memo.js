import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class MemosForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      createdOn: "",
      body: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.title]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    fetch(this.props.baseUrl + "/home", {
      method: "POST",
      body: JSON.stringify({
        task: this.state.title,
        dueDate: this.state.createOn,
        body: this.state.body,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.props.addMemo(data);
        this.props.toggleMemoModal()
      });
  };

  render() {
    return (
      <>
        <Modal class="bg-light"
          show={this.props.memosFormModal}
          onHide={this.props.toggleMemokModal}
        >
          <form onSubmit={this.handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title class="text-dark font-welcome-buttons">Create New Memo</Modal.Title>
            </Modal.Header>
            <Modal.Body class="row mx-3 g-3 font-welcome-text">
              <div>
                  <label htmlFor="task">Task: </label><br></br>
                  <input
                    type="text"
                    id="memo"
                    name="memo"
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.title}
                  />
                <br></br>
                  <label>Created On: </label><br></br>
                  <input
                    type="date"
                    id="createdOn"
                    name="createdOn"
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.createdOn}
                  /><br></br>
              </div>
            </Modal.Body>
            <br></br>
            <Modal.Footer>
              <Button variant="secondary" className="font-signup-buttons" onClick={this.props.toggleMemoModal}>
                Submit
              </Button>
              <input
                className="btn btn-dark text-light font-signup-buttons"
                type="submit"
                value="Add New Memo"
              />
            </Modal.Footer>
          </form>
        </Modal>
      </>
    );
  }
}

export default MemosForm;

