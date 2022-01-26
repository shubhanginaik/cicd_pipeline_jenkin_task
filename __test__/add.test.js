const {sum}= require('../calclibary');

describe('test sum with integers',()=>{
    test('test 1+1=2',()=>{
        expect(sum(1,1)).toBe(2);
    });
})