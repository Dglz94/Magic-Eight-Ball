let username = document.getElementById("name");
let userQuestion = document.getElementById("question");
let randomNumber = Math.floor(Math.random() * 7);
let eightBall = "";
let message = "";
const askButton = document.getElementById("buttonAsk");
const msg = document.getElementById('msg');
const answer = document.getElementById('answ');

askButton.addEventListener("click", () => {
  msg.innerHTML = "";
  name = username.value;
  question = userQuestion.value;
  

  name ? (message = `Hello, ${name}!`) : (message = "Hello!");
  checkInputs(question) ? answer.innerHTML = eightBall : answer.innerHTML = "Please insert a question";
  msg.innerHTML = message;
  username.value = "";
  userQuestion.value = "";
}); 

const checkInputs = (question) => {
  if(question){
    return true;
  }
}

switch (randomNumber) {
  case 1:
    eightBall = "It is certain";
    break;
  case 2:
    eightBall = "It is decidedly so";
    break;
  case 3:
    eightBall = "Reply hazy try again";
    break;
  case 4:
    eightBall = "Cannot predict now";
    break;
  case 5:
    eightBall = "Do not count on it";
    break;
  case 6:
    eightBall = "My sources say no";
    break;
  case 7:
    eightBall = "Outlook not so good";
    break;
  default:
    eightBall = "Signs point to yes";
    break;
}
