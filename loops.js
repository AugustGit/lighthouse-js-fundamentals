function range(start, end, step){
  if ((start > end)  || (step < 0 )|| (start = undefined) || (end = undefined) || (step = undefined )){
    return[];
  } else {
     var array = [];
    for (var i = start; i <= end; i += step){
    array.push(i);
    }
    return array;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));