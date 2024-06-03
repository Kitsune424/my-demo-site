// текст, который будет появляться на экране
const text = ['My WEB Project portfolio ', 'KTSN Portfolio. '];

let line = 0;
let count = 0;
let result = '';

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function typeLine() {
  let interval = setTimeout(
    () => {
      result += text[line][count]
      document.querySelector('p').innerHTML =result +'|';
    count++;
    if (count >= text[line].length) {
      count = 0;
      line++;
      sleep(2000);
      document.querySelector('p').innerHTML = '';
      result = '';
      if (line == text.length) {
        clearTimeout(interval);
        document.querySelector('p').innerHTML ='My WEB Project portfolio';
        return true;
      }
    }
    typeLine();
  }, getRandomInt(getRandomInt(150*2.5)))
}
typeLine();