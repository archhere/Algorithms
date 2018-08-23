function selectionsort(arr){
  let minIndex;
  for(let i=0; i<arr.length; i++){
    minIndex = i;
    for(let j=i+1; j<arr.length; j++){
      if(arr[minIndex] > arr[j]){
        minIndex = j;
      }
    }
    if(i !== minIndex){
      [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]];
    }
  }
  return arr;
}
