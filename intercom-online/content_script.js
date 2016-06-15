/* raw JS file -1 */

var num_online = $(".avatar__activity-indicator.o__on").length;
var users_displayed = $(".ember-view.tbl__user-list-row").length;
var msg = num_online + " online" + (num_online == users_displayed ? " but there could be more, scroll down to load more records":"");

/* alert(msg); */

var className = "bookmarklet_message";
var element = $("." + className);
if( $("." + className).length ==  0){
element = $("<div class="+className +" style='font-weight: bold; font-size: 30px; color: red; position: absolute; z-index: 1000000; padding: 0.5em; border: 5px solid red; display: nolne; background-color: rgb(255, 255, 255); border-radius: 0.9em; margin-top: 0.5em; text-align: right; right: 1em;'></div>");
element.hide();
$("BODY").prepend(element);
}
else{
element = element.eq(0);
}
element.text(msg).fadeIn(100).delay(1000).fadeOut(1000);

/* raw JS file - 0 */
