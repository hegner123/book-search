import React from "react";


function SearchItem(props){
  return(
    <div className="row">
      <div className="col-12 col-md-9 ">
  <h3>{props.title}</h3>
        <p>{props.author}</p>
      </div>
      <div className="col-12 col-md-3">
        <a href="/" className="btn btn-primary ml-auto">Read More</a>
        <a href="/" className="btn btn-success ml-auto">Save Book</a>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="row px-3">
            <div className="col-6 col-md-3">
              <a href="/">
              <img src={props.img} className="img-fluid" alt="placeholder"/>
              </a>
            </div>
            <div className="col-6 col-md-9 description">
            <p> {props.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchItem