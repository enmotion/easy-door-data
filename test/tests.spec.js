var assert = require ('assert');
import EDD from "../src"

describe('Easy-data-door 测试',function(){
    describe("校验数据不能为 Null,undefined",function(){
        it("不设规则时 = undefined，true",function(){
            var m;
            console.log(m)
            assert.equal(EDD(m),true)
        })
        it("规则不允许为 Null,undefined =undefined，false",function(){
            var m;
            assert.equal(EDD(m,{notNil:true}),false)
        })
        it("规则允许为 Null,undefined =undefined，true",function(){
            var m;
            assert.equal(EDD(m,{notNil:false}),true)
        })        
    })
    describe("校验数据不能为空",function(){
        it("规则不允许为空[]，false",function(){
            var m=[];
            assert.equal(EDD(m,{notEmpty:true}),false)
        })
        it("规则不允许为空{}，false",function(){
            var m={};
            assert.equal(EDD(m,{notEmpty:true}),false)
        })
        it("规则不允许为空 ''，false",function(){
            var m="";
            assert.equal(EDD(m,{notEmpty:true}),false)
        })
        it("规则允许为空 ''，true",function(){
            var m="";
            assert.equal(EDD(m,{notEmpty:false}),true)
        })
        it("not Nil is False check",function(){
            var m;
            assert.equal(EDD(m,{notNil:false}),true)
        })
    })
    describe("校验数据类型",function(){
        it("数据只可为String，true",function(){
            var m="mod";
            assert.equal(EDD(m,{notEmpty:true,type:String}),true)
        })
        it("数据只可为[String,Object]，true",function(){
            var m={name:"mode"};
            assert.equal(EDD(m,{notEmpty:true,type:[String,Object]}),true)
        })
        it("数据只可为[String,Object]，false",function(){
            var m=[{mod:123}];
            assert.equal(EDD(m,{notNil:true,type:[String,Object]}),false)
        })        
    })    
})