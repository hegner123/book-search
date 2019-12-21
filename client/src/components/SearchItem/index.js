import React from "react";


function SearchItem(){
  return(
    <div className="row">
      <div className="col-12 col-md-9 ">
        <h3>Title</h3>
        <p>Author</p>
      </div>
      <div className="col-12 col-md-3">
        <a href="/" className="btn btn-primary ml-auto">Button1</a>
        <a href="/" className="btn btn-success ml-auto">Button2</a>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="row px-3">
            <div className="col-6 col-md-3">
              <a href="/">
              <img src="300px.png" className="img-fluid" alt="placeholder"/>
              </a>
            </div>
            <div className="col-6 col-md-9 description">
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, animi exercitationem cupiditate similique tempora suscipit sit culpa accusantium eaque doloribus in aut necessitatibus at perspiciatis nihil provident quia. Tempore, excepturi atque. Quisquam, assumenda corrupti ducimus sit officia facilis placeat ad a ipsam beatae enim ut maxime id repellendus quo repellat ullam. Maiores unde rerum eligendi recusandae illum voluptate iste odio exercitationem cum, pariatur quaerat. Voluptas eos error cumque consectetur quasi repudiandae aut, est corrupti similique neque doloribus natus, deserunt assumenda, quos perspiciatis sint doloremque aspernatur corporis distinctio. Incidunt quaerat quas, velit accusantium mollitia hic vel impedit. Eaque adipisci, unde rem odio obcaecati, id ad modi nisi cum pariatur quasi quidem, labore asperiores quam distinctio odit dolores voluptate placeat possimus dignissimos. Ea minima repellendus quos tenetur autem necessitatibus iure itaque nemo perspiciatis officia reprehenderit maiores assumenda, blanditiis adipisci consectetur. Dolor quaerat assumenda perferendis. Culpa labore quisquam ipsam placeat quo ad quibusdam! </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchItem