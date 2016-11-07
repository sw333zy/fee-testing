(function() {
    'use strict';

    window.calc = window.calc || {};


    var expect = chai.expect;

      describe('calc', function(){
        it('should know 1 is equal to 1', function(){
          expect(1).to.equal(1);
        });
      })

      describe('first', function(){
        it('should add all numbers in array and return the value', function(){
        var result = window.calc.sum([3, 2, 1]);
        expect(result).to.equal(6);
        });
      });








})();
