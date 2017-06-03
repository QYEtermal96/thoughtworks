import {expect} from 'chai';
import  {square} from '../src/main';

describe('square', () => {
  it('should return the square of the input number', () => {
        expect(square([["1","1","0"],["0","0","0"],["0","0","0"]])).to.deep.equal([["0","0","0"],["0","0","0"],["0","0","0"]]);
    });


});
