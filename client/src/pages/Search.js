import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import SearchResults from "../components/SearchResults";

class Search extends Component {
  state = {
    search: "",
    results: []
  };

  searchBook = query => {
    API.search(query)
      .then(res => { this.setState({ results: res.data.items }); 

        console.log("Here");
        console.log(this.state.results);
      })
      .catch(err => console.log(err));

  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBook(this.state.search);
  };

  handleSave = book => {
    console.log("book info" + JSON.stringify(book));
    API.saveBook(book)
    .then(res => {
      console.log("added");
    })
    .catch(err => console.log(err));

  };
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <form>
              <h3>Book Search</h3>
              <Input
                value={this.state.search}
                onChange={this.handleInputChange}
                name="search"
                placeholder="Title (required)"
              />
              <FormBtn
                //disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >Search</FormBtn>
            </form>
          </Col>
        </Row>
        <Col size="md-12">
          <h3>Results</h3>

          {this.state.results.map(result => (

            <SearchResults
              title = {result.volumeInfo.title}
              author = {result.volumeInfo.authors[0]}
              img = {result.volumeInfo.imageLinks.smallThumbnail}
              summary = {result.volumeInfo.description}
              link = {result.volumeInfo.infoLink}
              handleSave={this.handleSave}
            />
          ))}
        </Col>
        <Row>

        </Row>

      </Container>
    );
  }
}

export default Search;
