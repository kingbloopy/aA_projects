
class Clock {
  constructor(){
    // 1. Create a Date object.
    let date = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    // 3. Call printTime.
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.
    this._tick();
  }

  printTime(){
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick(){
    // 1. Increment the time by one second.
    // 2. Call printTime.
    setInterval(() => {
      this.seconds += 1;
      this.printTime();
    }, 1000);
  }
}

const clock = new Clock();
// console.log(clock);



