//Counter code
//Get button reference from document
var button = document.getElementById('counter');

var counter = 0;

//OnClick Listener to button
button.onclick = function(){
    
    //Increment the counter
    counter = counter + 1;
    
    //Modify the span dynamically.
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};

var xhr = new XMLHttpRequest();
console.log('UNSENT', xhr.readyState); // readyState will be 0

xhr.open('GET', '/api', true);
console.log('OPENED', xhr.readyState); // readyState will be 1

xhr.onprogress = function () {
    console.log('LOADING', xhr.readyState); // readyState will be 3
};

xhr.onload = function () {
    console.log('DONE', xhr.readyState); // readyState will be 4
};

xhr.send(null);