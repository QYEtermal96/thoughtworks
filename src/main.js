import _ from 'lodash'
function tao(n)
{
    var length = n.length
    var ori= []
    for(var i = 0;i < length+2;i++)
    {
        var a=[]
        for( var j = 0;j < length+2;j++)
        {
            a.push("0")
        }
        ori.push(a);
    }
    for(var i=1;i<length+1;i++)
    {
        for(var j=1;j<length+1;j++)
        {
               ori[i][j] = n[i-1][j-1]
        }
    }
    return ori
}
function check(i,j,a) {
    i++
    j++
    var die = 0
    var live = 0
    for (var k = i - 1; k < i + 2; k++) {
        for (var t = j - 1; t < j + 2; t++) {
            if (a[k][t] === "0") {
                die++
            } else {
                live++
            }
        }
    }
    if(a[i][j]==="1")
    {
        live --
    }else
    {
        die--
    }
    if (a[i][j] === "1") {
        if (live === 2 || live === 3) {
            return "1"
        } else return "0"
    }
    if (a[i][j] === "0") {
        if (live === 3) {
            return "1"
        } else return "0"
    }
}
const square = (n) => {
  //console.log(_.range(0, n))
  var a = tao(n)
  var length = n.length
  var result = [[]]
  for(var i = 0;i<length;i++){
      result[i] = []
     for (var j = 0;j < length;j++)
      {
            //console.log(a[i+1][j+1])
            result[i][j] = check(i,j,a)
          //console.log(result[i][j])
      }
  }
  var test = [[]]
  for (var i =0;i <length;i++ )
  {
      test[i] = []
      for (var j=0;j<length;j++)
      {
          test[i][j] = result[i][j]
          if(result[i][j] === "0")
          {
             test[i][j] = " "
          }
      }
  }
  return result;
};


module.exports = {
  square
};
