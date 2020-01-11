
// function loadScript(src, callback) {
//   let script = document.createElement('script');
//   script.src = src;

//   script.onload = () => callback(script);

//   document.head.append(script);
// }

// loadScript('./script.js', () => {
//   alert('Hey!!!');
// });

//------- My simple example with level of callbackhell


// function alertLevel(level, callback) {
//   alert(`This is ${level} level now!!!`);
//   callback();
// };

// for(let level = 1; level <= 10; level++){
//   alertLevel(level, function() {
//     alert(`Are u redy for next level ${level + 1}?`);
//   });
// }


function alertLevel(level, callback) {
  alert(`This is ${level} level now!!!`);
  callback();
};

alertLevel(1, () => alertLevel(2, () => alertLevel(3, () => alertLevel(4, () => alertLevel(5)))));
