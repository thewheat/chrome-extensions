var count = 0;
function incrementCount(){
  return ++count;
}

function getViews(){
  var viewTabUrl = chrome.extension.getURL('popup.html');
  var views = chrome.extension.getViews();
  for (var i = 0; i < views.length; i++) {
    var view = views[i];
    if (view.location.href == viewTabUrl) {
      view.test("Hello from Background where count is " + count);
    }
  }
}
