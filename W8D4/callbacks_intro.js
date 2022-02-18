
// class Clock {
//   constructor(){
//     // 1. Create a Date object.
//     let date = new Date();
//     // 2. Store the hours, minutes, and seconds.
//     this.hours = date.getHours();
//     this.minutes = date.getMinutes();
//     this.seconds = date.getSeconds();
//     // 3. Call printTime.
//     this.printTime();
//     // 4. Schedule the tick at 1 second intervals.
//     this._tick();
//   }

//   printTime(){
//     // Format the time in HH:MM:SS
//     // Use console.log to print it.
//     console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
//   }

//   _tick(){
//     // 1. Increment the time by one second.
//     // 2. Call printTime.
//     setInterval(() => {
//       if (this.seconds === 59) {
//         this.seconds = 0;
//         this.minutes += 1;
//       } 
//       if (this.minutes === 59) {
//         this.minutes = 0;
//         this.hours + 1;
//       } 
      
//       this.seconds += 1;

//       this.printTime();
//     }, 1000);
//   }
// }

// const clock = new Clock();
// // console.log(clock);


const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){
  if (numsLeft > 0){
    reader.question('Enter a number:', answer => {
      const num = Number(answer);
      sum += num;
      console.log(sum);
      reader.close();
    });
  } else {
    return addNumbers(sum, numsLeft-1, completionCallback)
  }
}

console.log(addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`)));
// p 'Enter a number:'

// response = gets.chomp.to_i

// sum += response