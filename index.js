// Code your solution in this file!


    const drivers = ["Sally", "Bob", "Chandler"];

    const returnFirstTwoDrivers = function(drivers){
        return drivers.slice(0,2)
    }


    const returnLastTwoDrivers = function(drivers){
        return drivers.slice(-2)
    }
    

    const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];


    const createFareMultiplier = function (FareMultiplier) {
        return function(value){

            let x = FareMultiplier*value

            return x;

        }
    }

    const fareDoubler = createFareMultiplier(2);
    const fareTripler = createFareMultiplier(3);

    function selectDifferentDrivers(drivers, selectingDrivers){
        return selectingDrivers(drivers);
    }