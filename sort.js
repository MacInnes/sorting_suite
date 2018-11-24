function mergeSort(array){
  if (array.length === 1){
    return array;
  }

  const midpoint = Math.floor(array.length / 2);
  const left = array.slice(0, midpoint);
  const right = array.slice(midpoint);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
  var output = [];
  var leftIndex = 0;
  var rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length){
    if (left[leftIndex] < right[rightIndex]){
      output.push(left[leftIndex]);
      leftIndex++;
    } else {
      output.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return output.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

module.exports = mergeSort
