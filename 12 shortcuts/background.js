// https://developer.chrome.com/extensions/commands
chrome.commands.onCommand.addListener(function(command) {
  console.log('Command in background:', command);
});
