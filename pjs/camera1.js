var webPage = require('webpage');
var page = webPage.create();
var system = require('system');
var args = system.args;
if(!args[1] || args[1]===''){args[1]='http://ljv5555.github.io/file2url';}

page.viewportSize = {
	width: 1920,
	height: 1080
};

page.open(args[1], function (status) {
  setTimeout(function(){
  var base64 = page.renderBase64('JPG');
  console.log("<img style=\"display:none;\" src=\""+base64+"\" -data-timestamp=\""+(new Date()).getTime()+"\"/>");
  phantom.exit();
  },800);
});
