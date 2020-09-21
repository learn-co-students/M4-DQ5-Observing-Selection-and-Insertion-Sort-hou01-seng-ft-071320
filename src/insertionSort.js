function insertionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  let i = 1
  while (i < arr.length) {
    let x = arr[i]
    let j = i -1
    while (j >= 0 && arr[j] > x) {
      arr[j+1] = arr[j]
      j -=1
    }
    arr[j+1] = x
    i += 1
  }
}