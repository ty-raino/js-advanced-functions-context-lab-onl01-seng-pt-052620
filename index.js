function createEmployeeRecord(employeeArr) {
    const employee = {
        firstName: employeeArr[0],
        familyName: employeeArr[1],
        title: employeeArr[2],
        payPerHour: employeeArr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employee;
}

function createEmployeeRecords(employeeData) {
    return employeeData.map( employee => createEmployeeRecord(employee));
}

function createTimeInEvent(timeInString) {
    const [date, hour] = timeInString.split(' ')
    this.timeInEvents.push({
        type: 'TimeIn',
        hour: hour,
        date: date,
    })
    return this
}

function createTimeOutEvent(timeOutString) {
    const [date, hour] = timeOutString.split(' ')
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: hour,
        date: date,
    })
    return this
}

  

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) 
    return payable
}