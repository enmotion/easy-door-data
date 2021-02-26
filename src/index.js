const R = require('ramda');

function valiData(data,rule,prefix){        
    // 如果没有校验规则或者规则不是正确格式时，直接返回真
    if(R.isNil(rule) || rule.constructor != Object){return true;}
    var rule = R.merge({notNil:true,notEmpty:true},rule)
    // 如果数据为 null or undefined，且并未要求不能为空时 直接返回 false
    if(R.isNil(data) && rule.notNil){
        console.error("ERROR:"+(prefix||"")+" can't be Null or undefined");
        return false
    }        
    // 如果数据为 empty，且并未要求不能为空时 直接返回 false  
    if(R.isEmpty(data) && rule.notEmpty){
        console.error("ERROR:"+(prefix||"")+" can't be empty");
        return false
    }
    // 如果数据为格式检查
    var type = rule.type ? rule.type.constructor == Function? [rule.type] : rule.type :[String,Number,Object,Array,Boolean,Function];
    if(!R.isNil(data) && type.indexOf(data.constructor)<0){
        console.error("ERROR:"+(prefix||"")+" type check failed Expected ["+ R.pluck("name")(type) +"] got "+data.constructor.name);
        return false;
    }
    return true;
}
  

export default valiData