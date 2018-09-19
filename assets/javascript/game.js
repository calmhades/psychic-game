        var totalWins = 0;
        var totalLosses = 0;
        var guessesLeft = 9;
        var guessesSoFar = [];
        var computerPick = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        
        document.onkeydown = function(event) {  // event to start game
            var userGuess = String.fromCharCode(event.keyCode).toLowerCase();   // gather user guesses from key pressed, changes to lower case
            var computerChoice = computerPick[Math.floor(Math.random() * computerPick.length)];  // generate random letter from computerPick array
            guessesSoFar.push(userGuess);  // push guesses to array to be displayed on screen
            if (userGuess == computerChoice) {  // if the player guesses right, creates alert, then resets guessesLeft and guessesSoFar to 9 and 0
                totalWins++;
                alert('You are psychic!  You guessed correct!')
                guessesLeft = 9;
                guessesSoFar.length = 0;
            }
            else if (guessesLeft == 0){  // if user runs out of guesses, increase totalLosses by 1, and reset the guessesLeft and guessesSoFar to 9 and 0
                totalLosses++;
                alert('You did not guess the correct letter.  Try again!');
                guessesLeft = 9;
                guessesSoFar.length = 0;
            }
            else if (userGuess !== computerChoice) {  //if user guesses wrong, decrease guessesLeft by 1
                guessesLeft--;
                }
            document.getElementById('wins').innerHTML = "Total Wins: "+totalWins;  // .innerHTML to output javascript results to webpage
            document.getElementById('losses').innerHTML = "Total Losses: "+totalLosses;
            document.getElementById('guessLeft').innerHTML = "Guesses Left: "+guessesLeft;
            document.getElementById('guessSoFar').innerHTML = "Guesses So Far: "+guessesSoFar;
            }