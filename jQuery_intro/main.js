//Part I

$('#my-button').on('click', function(){
  $('.part1').append('<p>Behavior changed!</p>')
    console.log('You clicked the button!');
});

$('#my-button1').on('click', function(){
  $('.part1').append('<h1>This is h1 button</h1>')
});

$('#my-button2').on('click', function(){

  $('.part1').append('<ul>My list<br></br><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>')
});

//Part II

$('#pink').mouseover(function(){
  $('#pink').css('color', 'pink');

});

$('#exclamation').append("!");

$('#link').click(function(e){
    if(!confirm("Are you sure you want to navigate to google.com?")){
    $(this).remove();

    e.preventDefault();
  };
});

//Part III

$(function(){
  console.log("ready!");
  $("#middle-button").on('click', function() {
    var html = "<div class = 'popup'><div class='close'>X</div><h1>Button<br>click!!!</h1></div>";

    $("#popup").append(html);

    $(".close").on('click', function() {
      $("#popup").remove();
    });
  });
});
