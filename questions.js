var startEl = document.getElementById("startButton");
var questionEl = document.getElementById("question");
var buttonEl = document.querySelector(".button_base b01_simple_rollover");
var answersEl = document.getElementById("answers");
var answer0El = document.getElementById("answer0");
var answer1El = document.getElementById("answer1");
var answer2El = document.getElementById("answer2");
var answer3El = document.getElementById("answer3");



var questions = [
    {
        title: 'Commonly used data types DO NOT include:',
        choices: ['strings','booleans','alerts','numbers'],
        answer: 'alerts'
    },
    {
        title: 'The condition in an if / else statement is enclosed within _______',
        choices: ['quotes','curly brackets','parentheses','square brackets'],
        answer: 'parentheses'
    },
    {
        title: 'What is the HTML tag under which one can write the JavaScript code?',
        choices: ['<javascript>','<scripted>','<script>','<js>'],
        answer: '<script>'
    },
    {
        title: 'Which of the following is the correct syntax for "coding is fun" in an alert box using JavaScript?',
        choices: ['alertbox("coding is fun");','msg("coding is fun");','msgbox("coding is fun");','alert("coding is fun");'],
        answer: 'alert("coding is fun");'
    },
    {
        title: 'What is the proper syntax for creating a function in JavaScript named masterfunc?',
        choices: ['function = masterfunc()','function masterfunc()','function := masterfunc()','function : masterfunc()'],
        answer: 'function masterfunc()'
    },
    {
        title: 'What is the method in JavaScript ised to remove the whitespace at the beginning and end of any string?',
        choices: ['trim()','strip()','cut()','slice()'],
        answer: 'trim()'
    }
];

var index = 0;
var timerInterval;
var secondsLeft = 90;
var highScore = [];

function countdownTimer() {
    var timer = 90;
    
    var interval = setInterval(function() {
        timer--;
        $('.timer').text(timer);

        if (timer === 0) {
            clearInterval(timer)
        }
        //if question is answered wrong - 15 seconds
          // compair user choice with the correct answer
            // if userchoice === questions answer (dont move time)
            // else if userchoie is not === to quection answer, dec timer down 15 secons
    }, 1000);
};


beginEl.onclick.

beginEl.addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("begin").style.visibility = 'hidden';
    document.getElementById("qblock").style.visibility = 'visible';
    console.log("I was clicked");
    setTime();
    game(event);
});

function game() {
    console.log(index)
    questionEl.textContent = questions[index].question;
    answer0El.textContent = questions[index].answer[0];
    answer1El.textContent = questions[index].answer[1];
    answer2El.textContent = questions[index].answer[2];
    answer3El.textContent = questions[index].answer[3];
  };

buttonEl.forEach(function (answerButton) {
    answerButton.addEventListener("click", function(event) {
      console.log("check answer clicked")
      var element = event.target;
      if (element.textContent !== questions[index].correct) {
        console.log("wrong")
        secondsLeft -= 10
      } else {
        console.log("correct answer");
      }
      if (index < questions.length - 1) {
        index++
        game()
      } else {
        clearInterval(timerInterval)
        endGame()
      }
    });
});

function endGame() {
    document.getElementById("gamescore").textContent = "Score: " + secondsLeft;
    document.getElementById("qblock").style.visibility = 'hidden';
    document.getElementById("restart").style.visibility = 'visible';
    document.getElementById("resethigh").style.visibility = 'visible';
    document.getElementById("gamescore").style.visibility = 'visible';
    document.getElementById("time").style.visibility = 'hidden';
    console.log(secondsLeft)
    storeHigh()
  };
  
  // restarts game by refreshing page
  restartEl.addEventListener("click", function (event) {
    location.reload(event)
  });
  
  // resets high score, leaving html default of "BD : 45"
  resethighEl.addEventListener("click", function (event) {
    localStorage.clear(event);
  });
  
  // stores the new/high score
  function storeHigh() {
  if ((highScore == 0) || (highScore == null)) {
    var initials = prompt("What are your initials?");
    highScore = initials + " " + secondsLeft;
    localStorage.setItem("highscore", highScore);
  } else { 
    if (secondsLeft > highScore) {
      initials = prompt("What are your initials?");
      highScore = initials + " " + secondsLeft;
      localStorage.setItem("highscore", highScore)
    } else {
      console.log("not a new high score")
      alert("Sorry, gotta do a little better next time!") 
    };
   };
  };
      </script>
    </body>
    
  </html>


      

