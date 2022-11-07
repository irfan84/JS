const findMissing = (arr) => {
let arr1= []

//finds missing numbers
arr.forEach ((e, i) => {
if((arr[i+1] - arr[i]) > 1){
    let x = arr[i+1] - arr[i]
    let diff = 1;
    while(x > diff){
    let final = arr[i]+diff;
     arr1.push(final);
     diff++;
    }
}
})

//finds missing indexes
const arrConcat = arr1.concat(arr).sort()
const result = arr1.map(searchTerm => arrConcat.findIndex((compareTerm) => compareTerm === searchTerm));
console.log(`\nMissing Numbers: ${arr1}\nMissing Indexes: ${result}\n`)
}

let arr = [11, 15, 17, 18, 19]
findMissing(arr);