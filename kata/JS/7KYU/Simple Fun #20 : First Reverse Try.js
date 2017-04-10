const firstReverseTry = (arr) => arr.length > 1 ? arr.slice(-1).concat(arr.splice(1, arr.length - 2)).concat(arr.slice(0, 1)) : arr;
