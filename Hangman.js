//ETHAN NOTES:
console.log('hangman.js loaded');

var Game = {

  guesses: 10,
  guessedLetters: [],
  currentWord: "",
  hangmanWord: [],
  wordsArray: ["indigo", "birthday", "karma"],
  startGame: function(wordsArray) {
    this.guesses = 10;
    console.log(this);
    this.guessedLetters = [];
    console.log(this.guessedLetters);
    var index = Math.floor(Math.random()) * wordsArray.length;
    this.currentWord = this.wordsArray[index];
    for (var i = 0; i < this.currentWord.length; i++) {
        this.hangmanWord[i] = "_";
    }
    this.render (this.hangmanWord, this.guesses, this.guessedLetters);
    var userGuess = this.promptUser();
    this.guess(userGuess);
  },
  render: function(hangmanWord, guesses, guessedLetters) {
    for (var i = 0; i < hangmanWord.length; i++) {
      if (hangmanWord[i] === guessedLetters) {
        guessedLetters = hangmanWord[i];
      }
    }
    console.log(hangmanWord);
  },
  promptUser: function() {
    var letter = prompt("Guess a letter!");
    for (var i = 0; i < this.guessedLetters.length; i++) {
      if (letter.toLowerCase() === guessedLetters[i]) {
        return this.promptUser();
      } else {
        return letter;
      }
    }
  },
  /*
  OK, if you scroll back up to startGame() you'll see that we called promptUser
  and stored the result of the user's entry in userGuess. We then called guess()
  and passed in userGuess to that function.
  here's our guess function below. You'll notice as I wrote it, it doesn't take
  any arguments. You need to fix that. Give it one argument and call it `ltr`
  (let's be short and concise!)
  */
  guess: function(ltr) {
    this.guessedLetters.push(ltr);
    this.guesses--;
    for (var i = 0; i < this.currentWord.length; i++) {
      if (this.currentWord[i] === ltr) {
        this.hangmanWord[i] = ltr;
      }
    }

    /*
    finally, we're going to need to see if the game is over! There's two ways the
    game is over:
    (1) the user won (guessed all the letters)
    (2) the user lost (didn't guess all letters AND is out of guesses)
    If neither of those is true, the game is still ongoing.
    We're going to use another function called isOver (below) to check to see if
    the game is over. It's going to return false if the game is NOT over and a
    truthy value (a string) if the game is over and the user has won or lost.
    Remember that "" (the empty string) is falsey and and any other string is truthy.
    Call isOver and store it in a variable called result. isOver takes one parameter,
    in this case our hangmanWord. So make sure to pass that into isOver when you
    call it!
    Then create an 'if' statement to see is result  is truthy or false.
    if the if statement is true (i.e., the game is over), you need to call the
    'overMessage' function (which we'll write below) and pass in result.
    if the if statement is false (the game isn't over) you need to do two things
    (1) call render and pass in the current hangmanWord, guesses remaining, and
    guessed letters.
    (2) do exactly what you did waaaaay up in the startGame function: get a user
    prompt for a new letter, store it in a variable, and then call guess, passing
    in the result of the user prompt.
    */

    //your code here
    var result = this.isOver(this.hangmanWord);
    if (result) {
      this.overMessage();
    } else {
      this.render(this.hangmanWord, this.guesses, this.guessedLetters);
      this.promptUser();
      this.guess(this.letter);
    }

  },
  isOver: function(word) {
    if (word.join("") === this.currentWord) {
      return "victory";
    } else if (this.guesses < 1) {
      return "defeat";
    } else {
      return false;
    }
    /*
    just two functions left!
    this function needs to check to see if the user has won or lost the game.
    remember, when you called this function up above in guess() you passed in
    this.hangmanWord as an argument. so modify isOver so it takes one parameter,
    which we'll call word. Do that now....
    I'm going to help you with the first part of the function. hangmanWord which
    we passed in was an array (it'll look something like this ["_","t","h","_","n"])
    but this.currentWord is a string("ethan"). How can we check to see if they match?
    Fortunately, JavaScript has a function to convert an array to a string. It's
    called join(). Here's the documentation on it:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
    So first thing, you need to do is convert word to a string using the join method. Do that now
    */

    //your code here

    /*
    now we need to check to see if word == currentWord. I'm going to leave the
    actual coding of this to you, but here's what needs to happen:
    (1) if word == currentWord the user has correctly guessed the entire word! The
    function needs to return "victory" if so
    (2) if the user has NOT correctly guessed the word, we need to check to see
    if the user is out of guesses. If the user ran out of guesses, they lost!
    stupid user. return "defeat"
    (3) if the user hasn't correctly guessed the word and still has guesses
    remaining the game isn't over. Remember the name of this function is "isOver"
    so if the game ISN'T over you should return false
    */

    //your code here

  },
  /* THE VERY LAST FUNCTION!
  overMessage is going to take one parameter, called result, so make sure to add that in.
  now remember, result is going to be equal to either "victory" or "defeat"
  overMessage should display the appropriate message depending on what the value
  of result is (i.e., something like "Congrats! you won" or "You dumbo. you lose.")
  make it display the winning and losing messages of your choice.
  */
  overMessage: function(result) {
  //your code here
    if ("victory") {
      console.log("You won!");
    } else if ("defeat") {
      console.log("You lost!");
    }


  }
};

// here we call startGame and pass in the wordsArray to begin playing ...
console.log("type Game.startGame(Game.wordsArray); to begin playing");
Game.startGame(Game.wordsArray);
/*
SUPER BONUSES: if you've finished the game and want to play around more, think
how you might handle some of the following:
1. keep track of games won/lost
2. Get the user's name so you can address them by name "Ethan, you dumbo, you lost!"
3. Draw a little stick figure hangman that grows with incorrect guesses. Here's my terrible
example:
  ______
  |    |
  |    |
  O    |
\---/  |
  |    |
 /\    |
       |
  ----------
  |        |
  |        |
*/
