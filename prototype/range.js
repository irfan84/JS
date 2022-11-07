// This function takes two arguments as start and end numbers to build an integer array

const Arr = {
    range(start, end) {
        const newRange = [];

        for (let i = start; i <= end; i++) {
            newRange.push(i)
        }
        
        console.log(newRange)
    }
}


Arr.range(1, 10)