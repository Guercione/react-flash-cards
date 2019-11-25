export const getRandomItemArray = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const getRandomRangeArray = (arr, range = 20) => {
  const newArr = [];
  const length = arr.length >= range ? range : arr.length;

  for (let i = 0; i <= length - 1; i++) {
    const ramdomValue = getRandomItemArray(arr);
    newArr.push(ramdomValue);
    arr = arr.filter(item => item !== ramdomValue);
  }

  return newArr;
};
