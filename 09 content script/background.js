chrome.browserAction.onClicked.addListener(function(tab) {
  console.log("Activate");
  chrome.tabs.executeScript(null, {file: "jquery-3.0.0.min.js"});
  chrome.tabs.executeScript(null, {file: "content_script.js"});
});
