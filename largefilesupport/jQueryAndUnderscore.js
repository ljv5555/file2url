var jQueryAndUnderscore(cb)
{
    var when = function(stringToEval,cb)
    {
        try{console.log('entered when: '+stringToEval+" --> "+eval(stringToEval));}catch(exc){}

        if(eval(stringToEval)){cb();}
        else{setTimeout(function(){when(''+JSON.stringify(stringToEval),cb);},500);}
    };
    var getXsS = function(url)
    {
        try{console.log('entered getxss: '+url);}catch(exc){}
        var ss = 's' + 'cr' + 'ip' + 't';
        var cst = document.getElementsByTagName(ss)[0];
        var ts = 1*(new Date()).getTime();
        var e = document.createElement(ss);
        var tsstr = '_ts1_='+ts;
        if((''+url).indexOf('?')==-1){tsstr=url+'?'+tsstr;}else{tsstr=url+'&'+tsstr;}
        e.src=tsstr;
        
        
        var h = document.getElementsByTagName('head')[0] || (function(){var h=document.createElement('head');document.all[0].appendChild(h);return h;})();
        if(h.children.length==0){h.appendChild(document.createElement('style'));}
        

        h.children[0].insertBefore(e,cst);
    };
    if(!window["jQuery"]){getXsS("https://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.js");}
    if(!window["_"]){getXsS("https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min.js");}
    when('(function(){if(window["_"])if(window["jQuery"])return true; return false;})()',
    function()
    {
        if(cb){ cb(); }
        try{console.log('eval complete.');}catch(exc){}
        

    });
};
