var webPage = require('webpage');
var page = webPage.create();

page.viewportSize = {
	width: 1920,
	height: 1080
};

page.open('http://ljv5555.github.io/scvideo', function (status) {
  setTimeout(function(){
  var base64 = page.renderBase64('JPG');
  console.log(base64);
  phantom.exit();
  },8000);
});
