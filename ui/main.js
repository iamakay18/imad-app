//Counter code
//Get button reference from document
var button = document.getElementById('counter');

var counter = 0;

//OnClick Listener to button
button.onClick = function(){
    
    //Increment the counter
    counter = counter + 1;
    
    //Modify the span dynamically.
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};