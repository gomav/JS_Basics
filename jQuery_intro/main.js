/* This is required for jQuery to work */ // ** Hint - e.preventDefault(); || return false; both prevent default behavior
// document is whaterver you are targeting - i.e., button,
// $(document).on('ready', function() {;
$('#my-button').on('click', function(){
  $('body').append('<p>Behavior changed!</p>')
    console.log('You clicked the button!');
});

$('#my-button1').on('click', function(){
  $('body').append('<h1>This is h1 button</h1>')
});

$('#my-button2').on('click', function(){

  $('body').append('<ul>My list<br></br><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>')
});
