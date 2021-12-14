function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr);
    for (j = 0; j < arr.length; j++) {
      arr[j] > arr[j + 1];
      //SWAP!
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
  return arr;
}

bubbleSort([12, 25, 23, 45]);
