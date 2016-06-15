function popup(){
  document.querySelector('.number').innerHTML = chrome.extension.getBackgroundPage().incrementCount();
  chrome.extension.getBackgroundPage().getViews();
}

function test(str){
  document.querySelector('.test').innerHTML = " (Test data: " + str + ")";
}

// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', popup);
});
