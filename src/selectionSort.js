//function selectionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  // arr.sort((a, b) => {
  //   return a - b
  // });
  // console.log(arr)
  // debugger
// }

function selectionSort(arr) {

  for (var i = 0; i < arr.length; i++) {

      let min = i; //  storing the index of minimum element

      for (var j = i + 1; j < arr.length; j++) {
          if (arr[min] > arr[ j ]) {
              min = j; // updating the index of minimum element
          }
      }

      if (i !== min) {
          let temp = arr[ i ];
          arr[ i ] = arr[min];
          arr[min] = temp;
      }
  }
  return arr;
}
