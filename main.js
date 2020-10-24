//Building .find and .findIndex from scratch
console.log(`.find from scratch`)
console.log(`*******************************`)



let numbers = [1,2,3,4,5,6,7,8,22,23]

const findFromScratch = (array) => {
    //Loop through array 1 at a time
    for (let i = 0; i < array.length; i++){
        //This is the parameter we are searching for
        if (array[i] > 21){
            //if found, then return the current element, then end loop.
            console.log(array[i])
            return array[i]
            //if nothing meets the parameter, returns undefined
        } else if (i === array.length - 1){
            console.log(`Nothing meets the criteria of your search`)
            return undefined
        }
    }
}

findFromScratch(numbers)


//Break between fromScratch and .find
console.log(``)
console.log(`this is built with .find method`)
console.log(`*******************************`)



const higherThan21  = numbers.find(element => element > 21)

console.log(higherThan21)


//Break between .find and .findIndex from scratch
console.log(``)
console.log(`.findIndex from scratch`)
console.log(`*******************************`)


const findIndexFromScratch = (array) => {
    for (let i = 0; i < array.length; i++){
        //create the condition to check for
        if (array[i] > 21){
            //if true, return the position
            console.log(i)
            return i
            //if nothing fits criteria, return position of -1
        } else if (i === array.length - 1){
            console.log("Nothing meets the criteria of your search")
            return -1
        }
    }
}

findIndexFromScratch(numbers)

//Break between .find and .findIndex from scratch
console.log(``)
console.log(`this is built with .findIndex method`)
console.log(`*******************************`)

const findIndexIfLargerThan21 = (element => element > 21)

console.log(numbers.findIndex(findIndexIfLargerThan21))