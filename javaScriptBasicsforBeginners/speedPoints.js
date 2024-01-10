// function checkSpeed (speed) {
//   if (speed < 70){
//     console.log('OK');
//   }else{
//     // use Math.floor() cause points throw flooting number
//     let points = Math.floor((speed - 70) / 5);
//     if (points >= 12) {
//       console.log('Liasence Suspened!!');
//     }
//     else{
//       console.log('points', points);
//     }
//   }
// }

checkSpeed(45);

// this is more dynamic and readablitiy using const keyword
function checkSpeed(speed) {
  const speedLimit = 70,
    kmPerPoints = 5;
  if (speed < speedLimit + kmPerPoints) {
    console.log("OK");
    return;
  }

  // use Math.floor() cause points is flooting number
  const points = Math.floor((speed - speedLimit) / kmPerPoints);
  if (points >= 12) {
    console.log("Liasence Suspened!!");
  } else {
    console.log("points", points);
  }
}
