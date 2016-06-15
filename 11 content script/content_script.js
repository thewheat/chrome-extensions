
$(document).ready(function(){
    var p;
    chrome.extension.sendRequest({method: "getList"}, function(response) {
      console.log(response);
        p = response.status;
        alert(response.status);
    });
});
