/*
Podstawowa biblioteka js
*/

// Podmiana obrazka na stronie
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/9A.png') {
      myImage.setAttribute ('src','images/Example.png');
    } else {
      myImage.setAttribute ('src','images/9A.png');
    }
}


// Zapisywanie informacji na dysku

var myButton = document.querySelector('Button');
var myHeading = document.querySelector('h1');

function setUserName() {

var myName = prompt('Prosze wpisac swoje imie.');
localStorage.setItem('name', myName);
myHeading.textContent = 'Witaj moj: ' + myname;

}


if(!localStorage.getItem('name')) {
setUserName();

} else {

var storedName = localStorage.getItem('name');
myHeading.textContent = 'Witaj moj: ' + storedName;

}

myButton.onclick = function() {
  setUserName();
}
