var authKey = "220cd3805ee24f1793498eaf76845ee5";
var topics = ["muscle cars", "video games", "space"];

function renderButtons() {

	$("#button-view").empty();

	for (var i = 0; i < topics.length; i++) {
		var a = $("<button>");
		a.addClass("topic");
		a.attr("data-name", topics[i]);
		a.text(topics[i]);
		$("#button-view").append(a);
	}
}

renderButtons ();

$("#add-topic").on("click", function (event) {
	event.preventDefault();
	var category = $("#topic-input").val().trim();
	topics.push(category); 

	renderButtons ();	
});


$("button").on("click", function(){
	var topic = $(this).attr("data-name");
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        topic + "&api_key=220cd3805ee24f1793498eaf76845ee5&limit=5";

        $.ajax({
        	url: queryURL,
        	method: "GET"
        })
        .done(function(response) {
        	console.log(response);
        	var results = response.data;
        	
        	for (var j = 0; j < results.length; j++) {
          var topiclDiv = $("<div class='item'>");

          var rating = results[j].rating;
          
          var p = $("<p>").text("Rating: " + rating);
          
          var topicImage = $("<img width= '500px'>");
          topicImage.attr("src", results[j].images.fixed_height.url);

          topicDiv.append(p);
          topicDiv.append(topicImage);

          $("#gif-dump").prepend(topicDiv);
      }

     });
});

