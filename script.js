function()
  {
    var searchTerm = "Star Wars";
    //console.log("one");
    $.get({

      url: "https://www.omdbapi.com/?apikey=8730a432&s="+searchTerm,
      success: function(data,textStatus,jqXHR)
        {
          console.log("hello");
          console.log(data);
        },
      error: function()
        {
          alert("There was an error");
        }

      
    }); // End of $.get
  }//end of function
  
);//end of jQuery