chrome.browserAction.onClicked.addListener(function(tab) {
  console.log("Activate");
  chrome.tabs.executeScript(null, {file: "content_script.js"});
});
