function popup(){
  chrome.runtime.getBackgroundPage(function(backgroundPage){
    document.querySelector('.number').innerHTML = backgroundPage.incrementCount();
  });
}

// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', popup);
});