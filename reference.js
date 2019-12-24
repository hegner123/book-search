
$(document).ready(function() {
  var item
  var outputList = document.getElementById("gList-output");
  var bookUrl = "https://www.googleapis.com/books/v1/volumes?q="
  var placeHldr = '<img src="https://via.placeholder.com/150">'
  var searchData;

  $("#search").click(function() {
      outputList.innerHTML = "";
      document.body.style.backgroundImage = "url('')";
      searchData = $("#search-box").val();

      if(searchData === "" || searchData === null) {
          displayError();
      }
      else {
          $.ajax({
              url: bookUrl + searchData,
              dataType: "json",
              success: function(response) {
                  console.log(response)
                  if(response.totalItems === 0) {
                      alert("This title is not in our library!");
                  }
                  else {
                      $("title").animate({'margin-top': '5px'}, 1000);
                      $(".book-list").css("visibility", "visible");
                      displayResults(response);
                  }
              },
              error: function() {
                  alert("Something went wrong! <br>"+"Try again!");
              }
          });
      }
      $("#search-box").val("");
  });

  function displayResults(response) {
      for(var i = 0; i < response.items.length; i+=2) {
          item = response.items[i];
          title1 = item.volumeInfo.title;
          author1 = item.volumeInfo.authors;
          publisher1 = item.volumeInfo.publisher;
          description1 = item.volumeInfo.description;
          bookLink1 = item.volumeInfo.previewLink;
          bookIsbn1 = item.volumeInfo.industryIdentifiers[1].identifier
          bookImg1 = (item.volumeInfo.imageLinks) ? item.volumeInfo.imageLinks.thumbnail : placeHldr;

          console.log(outputList);

      }
  }


  function displayError() {
      alert("You must enter a book title in the search query!");
  }
});















{this.state.books.map(books => (
    <SearchItem
      id={books.id}
      key={books.id}
      img={books.image}
      description={books.description}
    />
))}