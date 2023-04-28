// let matrix = [
//   '\\      /',
//   ' \\    /',
//   '   /\\   ',
//   '  /  \\  ',
//   '       /',
//   '\\     /',
// ];

// const dropBall = (startIndex) => {
//   if (startIndex === '')
//     return alert(
//       'Plase insert the position of the first string at which the ball should start falling'
//     );
//   if (startIndex < 0 || startIndex >= matrix[0].length)
//     return alert(
//       `The position of the first string must be >= 0 and <= ${matrix[0].length}`
//     );

//   let ballPositionAtString = startIndex; // index of the position of a string where the ball falls
//   const lastString = matrix.length - 1; // last string of the matrix

//   for (let i = 0; i < matrix.length; i++) {
//     const ballFallsCharacter = matrix[i][ballPositionAtString]; // a character that the ball faces when falling on each string

//     if (ballFallsCharacter === '\\') {
//       ballPositionAtString++;
//     } else if (ballFallsCharacter === '/') {
//       ballPositionAtString--;
//     }

//     if (lastString === i) {
//       console.log(
//         `The ball fell at the string 6, at the poition ${ballPositionAtString}`
//       );
//     }
//   }
// };

// dropBall(5);