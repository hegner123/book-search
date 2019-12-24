import React, { Component } from "react";
import { Col, Row, Container } from "../components/Container";
import Jumbotron from "../components/Jumbotron";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import API from "../utils/API"
import SearchItem from "../components/SearchItem";







class Search extends Component {
  // Setting our component's initial state
  state = {
    search : '',
    books : []
  };





  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { value } = event.target;
    this.setState({
      search: value
    });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();

    API.searchBook({
      search: this.state.search,
    })
    .then(res => this.setState({books: res}))
    .catch(err => console.log(err));
    console.log(this.state.books);
  }

  loadBooks = (res) => {
    this.setState({ books: res.data });
    console.log(this.state.search)
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
                <SearchResults>
        </SearchResults>
              </Col>
            </Row>
          </Container>
      </div>
    );
  }
}

export default Search;