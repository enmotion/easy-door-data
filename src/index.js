const R = require('ramda');

function easyDataDoor(config){
    var config = R.merge({
        notNil:"can't be Null or undefined",
        notEmpty:"can't be empty",
        typeCheck:['ype check failed','Expected ',',got ']
    },config)
    console.log(config)
}

export default easyDataDoor