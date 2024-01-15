function findMatching(drivers, string) {
    const matchingDrivers = [];

    drivers.forEach(driver => {
        if (driver.toLowerCase() === string.toLowerCase()){
        matchingDrivers.push(driver);
    }
    });

    return matchingDrivers;
}



function fuzzyMatch(drivers, string) {
    const matchingDrivers = [];

    drivers.forEach(driver => {
        if (driver.toLowerCase().startsWith(string.toLowerCase())) {
            matchingDrivers.push(driver);
        }
    })

    return matchingDrivers;
}

function matchName(drivers, string) {
    const matchingDrivers = [];
    
    drivers.forEach(driver => {
        if (driver.name === string) {
            matchingDrivers.push(driver);
        }
    });
    
    return matchingDrivers;
}
