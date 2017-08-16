console.log('Loaded!');

//Change the text using javascript

var element = document.getElementById('main-text'); 

element.innerHTML = 'New Value';

var img = document.getElementById('image');

img.onClick = function(){
    img.style.marginLeft = '100px';
};