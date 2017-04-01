function inArray(array1, array2) {
  const newArr = [];
  array1.forEach((arr) => {
    const matches = arr;
    array2.forEach((arr2) => {
      if (arr2.includes(matches)) {
        if (newArr.indexOf(matches) === -1) {
          newArr.push(matches);
        }
      }
    });
  });

  return newArr.sort();
}
