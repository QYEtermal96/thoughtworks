import _ from 'lodash'
function tao(n)
{
    var ori= []
    for(var i = 0;i < (n.length+2);i++)
    {
        var a=[]
        for( var j = 0;j < (n[0].length + 2);j++)
        {
            a.push("0")
        }
        ori.push(a);
    }
    return ori
}

function check(i,j,a) {
    var die = 0
    var live = 0
    for (var k = i - 1; k < i + 2; k++) {
        for (var t = j - 1; t < j + 2; t++) {
            if (k === i && t === j) {
                continue
            }
            if (a[k][t] === "0") {
                die++
            } else {
                live++
            }
        }
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
  var result = [[]]
  for(var i = 0;i<n.length;i++){
      result[i] = []
     for (var j = 0;j < n[i].length;j++)
      {
            result[i][j] = check(i+1,j+1,a)
      }
  }
  return result;


};

module.exports = {
  square
};
