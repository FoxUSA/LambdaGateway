module.exports = {};

module.exports.parseParams=function(event){

  /**
   * Turn the param string into a object
   * @param - A string like {id=1}
   * @return - A object for example {id:1}
   */
  var parse = function(param){
    var temp ={};

    param .replace("{","")
          .replace("}","")
          .split(",")
          .forEach(function(item){
            var keyVal=item.toString().trim().split("=");

            if(!keyVal[1]){
                temp[keyVal[0]]=true;
                return;
            }

            var parsedNumber = Number(keyVal[1]);
            if(parsedNumber)
                temp[keyVal[0]]=parsedNumber;
            else
                temp[keyVal[0]]=keyVal[1];
          });

    return temp;
  };

  return {
    path:parse(event.params.path),
    query:parse(event.params.query),
    header:parse(event.params.header)
  };
};
