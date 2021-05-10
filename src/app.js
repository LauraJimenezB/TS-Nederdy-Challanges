var allReadings = [
    {
        time: new Date('1/1/2021'),
        temperature: 10,
        city: 'Utah'
    },
    {
        time: new Date('1/1/2021'),
        temperature: 9,
        city: 'Utah'
    },
    {
        time: new Date('1/1/2021'),
        temperature: 11,
        city: 'Utah'
    },
    {
        time: new Date('1/1/2021'),
        temperature: 3,
        city: 'New York'
    },
    {
        time: new Date('1/1/2021'),
        temperature: 2,
        city: 'New York'
    },
    {
        time: new Date('1/1/2021'),
        temperature: 7,
        city: 'New York'
    },
];
var Summary = /** @class */ (function () {
    function Summary(first, last, high, low, average) {
        this.first = first;
        this.last = last;
        this.high = high;
        this.low = low;
        this.average = average;
    }
    return Summary;
}());
;
var processedReadings;
function processReadings(readings) {
    // add here your code
    var listByTime = readings.sort(function (a, b) { return (a.time > b.time) ? 1 : -1; });
    var listByTemperature = readings.sort(function (a, b) { return (a.temperature > b.temperature) ? 1 : -1; });
    var first = listByTime[0].temperature;
    var last = listByTime[listByTime.length - 1].temperature;
    var low = listByTemperature[0].temperature;
    var high = listByTemperature[listByTemperature.length - 1].temperature;
    var result = 0;
    for (var _i = 0, readings_1 = readings; _i < readings_1.length; _i++) {
        var i = readings_1[_i];
        if (i.temperature) {
            result += i.temperature;
        }
    }
    var average = result / readings.length;
    processedReadings = new Summary(first, last, high, low, average);
}
function getTemperatureSummary(date, city) {
    //add here your code
    var readingsOfTheDay = allReadings.filter(function (reading) { return reading.city === city && reading.time.getTime() === date.getTime(); });
    var summary;
    if (readingsOfTheDay.length > 0) {
        processReadings(readingsOfTheDay);
        summary = processedReadings;
    }
    else {
        summary = null;
    }
    console.log(summary);
}
/* exports.processReadings = processReadings
exports.getTemperatureSummary = getTemperatureSummary */ 
