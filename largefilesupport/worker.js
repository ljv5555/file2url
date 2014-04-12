var currentString='';

onmessage=function(o)
{
  if(o.data.action=='reset'){currentString='';}
  else if(o.data.action=='appendhex'){currentString+=btoa(o.data.data);}
  else if(o.data.action=='getresult'){postMessage(currentString);}
}
