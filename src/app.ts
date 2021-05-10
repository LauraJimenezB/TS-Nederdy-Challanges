const allReadings = [
  {
    time: new Date('1/3/2021'),
    temperature: 8,
    city: 'Utah',
  },
  {
    time: new Date('1/2/2021'),
    temperature: 10,
    city: 'Utah',
  },
  {
    time: new Date('1/2/2021'),
    temperature: 9,
    city: 'Utah',
  },
  {
    time: new Date('1/2/2021'),
    temperature: 12,
    city: 'Utah',
  },
  {
    time: new Date('1/2/2021'),
    temperature: 11,
    city: 'Utah',
  },
  {
    time: new Date('3/12/2021'),
    temperature: 15,
    city: 'New York',
  },
  {
    time: new Date('3/12/2021'),
    temperature: 10,
    city: 'New York',
  },
  {
    time: new Date('3/12/2021'),
    temperature: 11,
    city: 'New York',
  },
  {
    time: new Date('3/12/2021'),
    temperature: 9,
    city: 'New York',
  },
  {
    time: new Date('3/13/2021'),
    temperature: 16,
    city: 'New York',
  },
]

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


let processedReadings: TemperatureSummary = {
  first:0, 
  last: 0, 
  high:0, 
  low:0, 
  average:0
};

export function processReadings(readings: TemperatureReading[]): void {
  // add here your code
  const listByTime= readings.sort((a, b) => (a.time > b.time) ? 1 : -1)
  const listByTemperature= readings.sort((a, b) => (a.temperature > b.temperature) ? 1 : -1);

  const first = listByTime[0].temperature;
  const last = listByTime[listByTime.length-1].temperature;
  const low = listByTemperature[0].temperature;
  const high = listByTemperature[listByTemperature.length-1].temperature;

  let result = 0;
  for (let i of readings) {
    if (i.temperature) {
      result += i.temperature;
    }
  }
  const average = result / readings.length;
    
  processedReadings.first = first;
  processedReadings.last = last;
  processedReadings.low = low;
  processedReadings.high = high;
  processedReadings.average = average;
}

export function getTemperatureSummary(
  date: Date,
  city: string,
): TemperatureSummary | null {
  //add here your code
  const readingsOfTheDay: TemperatureReading[] =  
  allReadings.filter(reading=>reading.city===city && reading.time.getTime()===date.getTime());
  
  let summary: TemperatureSummary | null;

  if(readingsOfTheDay.length > 0) {

    processReadings(readingsOfTheDay);
    summary = processedReadings;

  } else {
    summary = null;
  }
  return summary;
}
