// example interfaces that can be use
// TIP: the types mentioned in the interfaces must be fulfilled in order to solve the problem.
interface TemperatureReading {
  time: Date
  temperature: number
  city: string
}
interface TemperatureSummary {
  first: number
  last: number
  high: number
  low: number
  average: number
}

const allReadings = [
	{
		time: new Date('1/1/2021'),
		temperature: 10,
		city: 'Utah',
	},
	{
		time: new Date('1/1/2021'),
		temperature: 9,
		city: 'Utah',
	},
	{
		time: new Date('1/1/2021'),
		temperature: 11,
		city: 'Utah',
	},
	{
		time: new Date('1/1/2021'),
		temperature: 3,
		city: 'New York',
	},
	{
		time: new Date('1/1/2021'),
		temperature: 2,
		city: 'New York',
	},
	{
		time: new Date('1/1/2021'),
		temperature: 7,
		city: 'New York',
	},
];


let processedReading: TemperatureReading[];

export function processReadings(readings: TemperatureReading[]): void {
  // add here your code
  processedReading = readings;
  console.log(processedReading)
}

export function getTemperatureSummary(date: Date, city: string): void {
  //add here your code
  const readingsOfTheDay: TemperatureReading[] =  
  allReadings.filter(reading=>reading.city===city && reading.time.getTime()===date.getTime());
  
  class Summary implements TemperatureSummary {
    constructor (public first:number, public last: number, public high:number, public low:number, public average:number) {
    }
  };

  let summary;

  if (readingsOfTheDay.length > 0) {

    const listByTime= readingsOfTheDay.sort((a, b) => (a.time > b.time) ? 1 : -1)
    const listByTemperature= readingsOfTheDay.sort((a, b) => (a.temperature > b.temperature) ? 1 : -1);

    const first = listByTime[0].temperature;
    const last = listByTime[listByTime.length-1].temperature;
    const low = listByTemperature[0].temperature;
    const high = listByTemperature[listByTemperature.length-1].temperature;

    let result = 0;
    for (let i of readingsOfTheDay) {
      if (i.temperature) {
        result += i.temperature;
      }
    }
    const average = result / readingsOfTheDay.length;
    
    summary = new Summary(first, last, high, low, average);

  } else {
    summary = null;
  } 
  
  console.log(summary); 
}

/* exports.processReadings = processReadings
exports.getTemperatureSummary = getTemperatureSummary */