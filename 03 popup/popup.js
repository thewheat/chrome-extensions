function popup(){
  alert('hi');
  // This will not stay open
  // https://developer.chrome.com/extensions/faq#faq-persist-popups
}

// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', popup);
});
