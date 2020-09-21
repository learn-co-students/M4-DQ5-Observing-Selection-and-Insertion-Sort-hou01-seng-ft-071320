function selectionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  for (let i = 0; i < arr.length - 1; i++){
    let jMin = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[jMin]) {
        jMin = j
      }
    }

    if (jMin != i) {
      // swap(a[i], a[jMin])
      [arr[i], arr[jMin]] = [arr[jMin], arr[i]]
    }
  }
}
