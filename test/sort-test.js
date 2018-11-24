const expect = require('chai').expect
const mergeSort = require('../sort')

describe('add functionality', function() {
  it('can sort an array', function(){
    var unsorted_array = [3,2,1,4,5];
    var expected = [1,2,3,4,5];
    var sorted = mergeSort(unsorted_array);
    expect(sorted).to.eql(expected);
  })
});
