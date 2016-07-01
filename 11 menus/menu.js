// mostly based on sample.js in https://developer.chrome.com/extensions/examples/api/contextMenus/basic.zip

function onClickMenuItem(info, tab) {
  console.log("item " + info.menuItemId + " was clicked");
  console.log("info: " + JSON.stringify(info));
  console.log("tab: " + JSON.stringify(tab));
}
function logClick(){console.log("regular click")}
// Create one test item for each context type.

// https://developer.chrome.com/extensions/contextMenus
// taking different actions on a page can dictate what menus will show up
// default is "page"
// "selection menus only show when you select/highlight text"
var contexts = ["all", "page", "frame", "selection", "link", "editable", "image", "video", "audio", "launcher", "browser_action", "page_action"];
for (var i = 0; i < contexts.length; i++) {
  var context = contexts[i];
  var title = "Test Menu item for this context: '" + context + "' menu item";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context], "onclick": onClickMenuItem});
  console.log("'" + context + "' item:" + id);
}


// Create a parent item and two children.
var parent = chrome.contextMenus.create({"title": "Test parent item"});
var child1 = chrome.contextMenus.create({"title": "Child 1", "parentId": parent, "onclick": onClickMenuItem});
var child2 = chrome.contextMenus.create({"title": "Child 2", "parentId": parent, "onclick": onClickMenuItem});


// Create some radio items.
function radioOnClick(info, tab) {
  console.log("radio item " + info.menuItemId +
              " was clicked (previous checked state was "  +
              info.wasChecked + ")");
}
var radio1 = chrome.contextMenus.create({"title": "Radio 1", "type": "radio","onclick":radioOnClick});
var radio2 = chrome.contextMenus.create({"title": "Radio 2", "type": "radio","onclick":radioOnClick});

// Create some checkbox items.
function checkboxOnClick(info, tab) {
  console.log(JSON.stringify(info));
  console.log("checkbox item " + info.menuItemId +
              " was clicked, state is now: " + info.checked +
              "(previous state was " + info.wasChecked + ")");

}
var checkbox1 = chrome.contextMenus.create({"title": "Checkbox1", "type": "checkbox", "onclick":checkboxOnClick});
var checkbox2 = chrome.contextMenus.create({"title": "Checkbox2", "type": "checkbox", "onclick":checkboxOnClick});
