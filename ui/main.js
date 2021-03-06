//Counter code
//Get button reference from document
//var button = document.getElementById('counter');

//OnClick Listener to button
/*button.onclick = function(){
    
    //We have to increment the counterpage whenever a request is completed
    //Check the XMLHttpRequest readyState by creating INSTANCE
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //do this
            if(request.status === 200){
                var counter = request.responseText;
                //Modify the span dynamically.
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    
    //Make the request
    request.open('GET','http://iamakay18.imad.hasura-app.io/counter',true);
    request.send(null);
};*/



//AJAX Example
var submitBtn = document.getElementById('submit_btn');
submitBtn.onclick = function(){
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    //Make a request to server and send the name
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //do this
            if(request.status === 200){
                alert('Login successful');
            }
        }
    };
    
    //Make the request
    request.open('POST','http://iamakay18.imad.hasura-app.io/login',true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({username: username, password: password}));
};


//XMLHttpRequest Example
/*var xhr = new XMLHttpRequest();
console.log('UNSENT', xhr.readyState); // readyState will be 0

xhr.open('GET', '/api', true);
console.log('OPENED', xhr.readyState); // readyState will be 1

xhr.onprogress = function () {
    console.log('LOADING', xhr.readyState); // readyState will be 3
};

xhr.onload = function () {
    console.log('DONE', xhr.readyState); // readyState will be 4
};

xhr.send(null);*/