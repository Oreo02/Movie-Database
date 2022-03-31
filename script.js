$(

function()
  {
    var searchTerm = "Star Wars";
    //console.log("one");
    $.get({

      url: "https://www.omdbapi.com/?apikey=8730a432&s="+searchTerm,
      success: function(data,textStatus,jqXHR)
        {
          var movieData = data["Search"];
         // console.log(data["Search"]);
          
          //$("#list-view > h1").append("Title");
          //$("#movie-details > h1").append("Hello")
          for(var x = 0;x < movieData.length; x++)
            {
              $("#list-view > table > tbody").append("<tr><td>"+movieData[x]["Title"]+"</td><td>"+movieData[x]["Year"]+"</td><td>"+movieData[x]["Poster"]+"</td></tr>");
            }

      

    },
      error: function()
        {
          alert("There was an error");
        }

      
    }); // End of $.get
  }//end of function
  
);//end of jQuery