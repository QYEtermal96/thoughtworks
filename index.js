require('babel-register');
const square = require('./src/main');

let $n = document.querySelector('#n');
let $times = document.querySelector('#times')
document.querySelector('#start').addEventListener('click', () => {
    let value = $n.value;
    let times = $times.value;
    let n = JSON.parse(value);
    window.setTimeout(function () {
        for(var i =0;i < times ; i++)
        {
            let res = square(n);
            document.write(res)
            var n = res
        }
    },3000)

})
