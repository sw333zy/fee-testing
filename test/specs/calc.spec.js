(function() {
    'use strict';

    window.calc = window.calc || {};


    var expect = chai.expect;

      describe('calc', function(){
        it('should know 1 is equal to 1', function(){
          expect(1).to.equal(1);
        });
      });

      describe('first', function(){

        it('should add all numbers in array and return the value', function(){
          var result = window.calc.sum([3, 2, 1]);
          expect(result).to.equal(6);
        });

        it('should no numbers be entered it should equal zero', function(){
          var result = window.calc.sum([]);
          expect(result).to.equal(0);
        });

        it('should not have NaN in place of a number', function(){
          var result = window.calc.sum();
          expect(result).to.be.NaN;
        });

        it('should not have a string rather than a number', function(){
          var result = window.calc.sum('This is a string');
          expect(result).to.equal('This is a string');
        });


      });

      describe('second', function(){
        it ('should multiply number given up to facotrial', function(){
          var result2 = window.calc.factorial(5);
          expect(result2).to.equal(120);
        });
        it('should not have Nan in place of a number', function(){
          var result2 = window.calc.factorial('number');
          expect(result2).to.be.NaN;
    });

    //   it('should a string be entered it should equal zero', function() {
    //     var result2 = window.calc.factorial('string');
    //     expect(result2).to.equal('0');
    // });





      });








})();
