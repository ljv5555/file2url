var webPage = require('webpage');
var page = webPage.create();
var system = require('system');
var args = system.args;
if(!args[1] || args[1]===''){args[1]='http://ljv5555.github.io/file2url/urlToBase64.js';}

page.viewportSize = {
	width: 1920,
	height: 1080
};

page.open(args[1], function (status) {
  setTimeout(function(){
  var base64 = page.renderBase64('JPG');
  console.log("<style>.bgi,.bgi_"+(new Date()).getTime()+"{background-image:url('data:image/jpeg;base64,"+base64+"'}</style>");
  phantom.exit();
  },800);
});
