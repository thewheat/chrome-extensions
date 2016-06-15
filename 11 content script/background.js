$(document).ready(function(){
    chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
      console.log("background data");
        if (request.method == "getList"){
          sendResponse({status: "got list"});
        }
        else
            sendResponse({}); // snub them.
        });
});
