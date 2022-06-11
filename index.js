// Code your solution in this file!

function returnFirstTwoDrivers(arr)
{
    return arr.slice(0,2)
}

function returnLastTwoDrivers(arr)
{
    return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = fare => {
    return function(value){
        return fare * value
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (arrayOfDrivers, myFunc) => {
return myFunc(arrayOfDrivers)
}

const myArr = ['mart','jeff','leah','pearl','zaq']

selectDifferentDrivers(myArr, returnFirstTwoDrivers)
selectDifferentDrivers(myArr, returnLastTwoDrivers)