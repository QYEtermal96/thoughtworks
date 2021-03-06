import {expect} from 'chai';
import  {square} from '../src/main';

describe('square', () => {
  it('should return the square of the input number', () => {
        expect(square([["1","1","0"],["0","0","0"],["0","0","0"]])).to.deep.equal([["0","0","0"],["0","0","0"],["0","0","0"]]);
    });
    it('should return the square of the input number', () => {
        //console.log('expect state:', square([["1","0","1"],["0","1","0"],["0","1","0"]]))
        expect(square([["1","0","1"],["0","1","0"],["0","1","0"]])).to.deep.equal([["0","1","0"],["1","1","1"],["0","0","0"]]);
    });
    it('should return the square of the input number', () => {
        //console.log('expect state:', square([["1","0","1"],["0","1","0"],["0","1","0"]]))
        expect(square([["1","0","0"],["0","1","1"],["1","0","1"]])).to.deep.equal([["0","1","0"],["1","0","1"],["0","0","1"]]);
    });
    it('should return the square of the input number', () => {
        //console.log('expect state:', square([["1","0","1"],["0","1","0"],["0","1","0"]]))
        expect(square([["1","0","0","1"],["0","0","1","1"],["0","1","1","0"],["0","0","0","1"]])).to.deep.equal([["0","0","1","1"],["0","0","0","1"],["0","1","0","0"],["0","0","1","0"]]);
    });
});
