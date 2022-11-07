// This function returns the sum of all elements in an array

const Arr = {
    sum(myArray) {
        let result = 0;

        for(let i = 0; i < myArray.length; i++) {
            result += myArray[i];
        }
        
        console.log(result);
    }
}

Arr.sum([1,2,3,6]);