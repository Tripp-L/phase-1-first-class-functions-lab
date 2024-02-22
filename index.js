const returnFirstTwoDrivers = (driversArray) => {
    const firstTwoDrivers = [driversArray[0], driversArray[1]]
    return firstTwoDrivers
    return firstTwoDrivers.slice(0, 2)
    //return driversArray.slice(0, 2)
}

const returnLastTwoDrivers = (driversArray) => {
    return driversArray.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (fareMultiplier) => {
    return (fare) => {
        return fare * fareMultiplier
    }
}

// const fareDoubler = (fare) => {
// const twoMultiplier = createFareMultiplier(2)
// console.log(twoMultiplier)
// return twoMultiplier(fare)
// }

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers, driversFunction) => {
    console.log(driversFunction)
    console.log(drivers)
    return driversFunction(drivers)
}
