import React, { Component } from "react";
import { Col, Row, Container } from "../components/Container";
import Jumbotron from "../components/Jumbotron";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults"





class Search extends Component {
  // Setting our component's initial state
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };





  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <Jumbotron/>
          <Container>
            <Row>
            <Col size="12">
              <SearchForm
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              />
            </Col>
            </Row>
            <Row>
              <Col size="12" styles="mt-5 p-5 bg-light">
                <h3>Results</h3>
                <SearchResults/>
              </Col>
            </Row>
          </Container>
      </div>

    );
  }
}

export default Search;
