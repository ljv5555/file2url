var webPage = require('webpage');
var page = webPage.create();
var system = require('system');
var args = system.args;
if(!args[1] || args[1]===''){args[1]='http://ljv5555.github.io/file2url/urlToBase64.js';}

page.viewportSize = {
	width: 1080,
	height: 720
};

page.open(args[1], function (status) {
  setTimeout(function(){
  var base64 = page.renderBase64('JPG');
  var ts=(new Date()).getTime();
  console.log("<img class=\"image_"+ts+"\" nothiddenimage hiddenimage\"  id=\"bgi_"+ts+"\" src=\"data:image/jpeg;base64,"+base64+"\"/>");
  phantom.exit();
  },9800);
});
