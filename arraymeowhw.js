function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}


const arr= [68, 189, -23, 0, 4, 1000];
const sortedArr= sortArray(arr);

console.log(sortedArr)