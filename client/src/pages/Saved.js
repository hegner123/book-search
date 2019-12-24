import React, { Component } from "react";
import { Col, Row, Container } from "../components/Container";
import Jumbotron from "../components/Jumbotron";
import SavedBooks from '../components/SavedBooks';
import API from "../utils/API";





class Search extends Component {
  // Setting our component's initial state
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    this.loadBooks();
  }

  // Loads all books  and sets them to this.state.books
  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // // When the form is submitted, use the API.saveBook method to save the book data
  // // Then reload books from the database
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
      <div>
        <Jumbotron/>
          <Container>
            <Row>
            <Col size="12">
            </Col>
            </Row>
            <Row>
              <Col size="12" styles="mt-5 p-5 bg-light">
               <SavedBooks/>
              </Col>
            </Row>
          </Container>
      </div>

    );
  }
}

export default Search;
