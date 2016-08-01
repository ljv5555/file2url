function jsonSorter(jsonObject)
{
  var rtnk = [];
  var rtnv = [];
  var  keys = Object.keys(jsonObject), i, len = keys.length;
  keys.sort();
  for (i = 0; i < len; i++)
  {
    k = keys[i];
    rtnk.push(keys[i]);
    rtnv.push(jsonObject[keys[i]]);
  }
}
