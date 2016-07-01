function initialiseTOCExtension(){
  function getArticlesOnPage(){
    return document.querySelectorAll("h2.title");
  }
  function getLocationToInsert(){
    return document.querySelector("#block-system-main");
  }


  function createBackToTopLink(){
    var toTop = document.createElement("a");
    toTop.href="#toc";
    toTop.style="display: block; text-align: right;"
    toTop.innerText = "(Back to TOC)";
    return toTop;
  }
  function createLinkToExistingTopic(link){
    var a = document.createElement("a");
    var id = link.id;
    if(!id){
      id = "link_" + parseInt(Math.random()*100000) + "_" + parseInt(Math.random()*100000);
      link.id = id;
    }
    a.href = "#" + id;
    a.innerText = link.innerText;
    return a;
  }

  function insertBackToTopLink(link){
    var toTop = createBackToTopLink();
    link.parentNode.insertBefore(toTop, link);  // insert before to allow copy and pasting of header with text below without needing to remove "(Back to Contents)" text
  }

  function createListItemFromExistingLink(link){
    var a = createLinkToExistingTopic(link);
    var li = document.createElement("li");
    li.appendChild(a);
    return li;
  }

  function createTOCHeader(tocPanel,listOfLinks){
    var headerText = document.createElement("h2");
    var headerLink = document.createElement("a");
    headerLink.appendChild(headerText);
    headerText.innerText = "Table of Contents";
    headerLink.name = "toc";
    return headerLink;
  }
  function createTOCDisclaimer(){
    var disclaimer = document.createElement("h4");
    disclaimer.style="color: red; text-align: center";
    disclaimer.innerText = "This and '(Back to TOC)' inserted by custom Chrome extension";
    return disclaimer;
  }
  function buildTOCPanel(existingLinksOnPage){
    var tocPanel = document.createElement("div");

    var listOfLinks = document.createElement("ol");
    listOfLinks.style='padding-left: 1.5em;'
    existingLinksOnPage.forEach(function(link){
      listOfLinks.appendChild(createListItemFromExistingLink(link));
      insertBackToTopLink(link);
    });
    tocPanel.style = "border: 3px dashed grey; padding: 0 1em; margin-bottom: 1em;";
    tocPanel.appendChild(createTOCHeader());
    tocPanel.appendChild(listOfLinks);
    tocPanel.appendChild(createTOCDisclaimer());
    return tocPanel;
  }
  function insertTOCPanelIntoPage(toc, article){
    article.insertAdjacentHTML('beforebegin', toc.outerHTML);
  }

  var articles = getArticlesOnPage();
  var calculate = null;
  var currentHash = window.location.hash || "";

  if(articles.length > 0){
    // we are on the articles page
    var topOfPage = getLocationToInsert();
    var tocPanel = buildTOCPanel(articles);
    insertTOCPanelIntoPage(tocPanel, topOfPage);
  }
}
function test(){ alert("hi");}


initialiseTOCExtension();
