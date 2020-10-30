window.onload = function() {

    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let categories;
    let selectedCategory;
    let getHint;
    let word;
    let guess;
    let guesses = [];
    let lives;
    let counter;
    let space;

    // Get Elements //
    
   let displayLives = document.getElementById("lives");
   let displayCategory = document.getElementById("category");
   let getHint = document.getElementById("hint");
   let displayHint = document.getElementById("clue");

   // Alphabet list //

   let displayAlphabet = function() {
    
    let letterButtons = document.getElementById('letters');
    let letters = document.createElement('ul');

     for (let i = 0; i < alphabet.length; i++) {
         letters.id = 'alphabet';
         list = document.createElement('li');
         list.id = 'letter';
         list.innerHTML = alphabet[i];
         check();
         letterButtons.appendChild(letters);
         letters.appendChild(list);
     }
    }

    // CATEGORIES //

     let chooseCategory = function() {
         if (selectedCategory === categories[0]) {
             category.innerHTML = "Your category is European Capitals"; 
         
         } else if 
             (selectedCategory === categories[1]) {
                 category.innerHTML = "Your category is Movies";
             } else if (selectedCategory === categories[2]) {
                 category.innerHTML = "Your category is Animals"
             }
         }

         // GUESSES LIST //

         let result = function() {

            wordHolder = document.getElementById('answer');
            correctAnswer = document.createElement('ul');

            for (let i = 0; i < word.length; i++) {
                correctAnswer.setAttribute('id', 'new-word');
                guess = document.createElement('li');
                guess.setAttribute('class', 'guess');
                if (word[i] === "-") {
                    guess.innerHTML = "-";
                    space = 1;
                } else {
                    guess.innerHTML = "_";
                }

                guesses.push(guess);
                wordHolder.appendChild(correctAnswer);
                correctAnswer.appendChild(guess);
            }
         }
     
         // REMAINING LIVES //

        let  messages = function() {

            displayLives.innerHTML = "You have " + lives + "lives";
            if (lives < 1) {
                displayLives.innerHTML = "Game Over :(";
            } for (let i = 0; i < guesses.length; i++) {
                if (counter + space === guesses.length) {
                    displayLives.innerHTML = "You win!";
                }
            }
        }

         // ANIMATE MAN //
         var animate = function () {
                let drawMe = lives;
                drawArray[drawMe]();
        }

         // HANGMAN //
        canvas = function() {
            myHangman = document.getElementById("hangman");
            context = myHangman.getContext('2d');
            context.beginPath();
            context.strokeStyle = "#fff";
            context.lineWidth = 1;


        };

        head = function() {
            myHangman = document.getElementById("hangman");
            context = myHangman.getContext('2d');
            context.beginPath();
            context.arc(60, 25, 10, 0, Math.PI*2, true);
            context.stroke();
        }
        draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
            context.moveTo($pathFromx, $pathFromy);
            context.lineTo($pathTox, $pathToy);
            context.stroke();
        }

        frame1 = function() {
            draw (0, 150, 150, 150);
        };

        frame2 = function() {
            draw (10, 0, 10, 600);
        };

        frame3 = function() {
            draw (0, 5, 70, 5);
        };

        frame4 = function() {
            draw (60, 5, 60, 15);
        };

        torso = function(){
            draw (60, 36 , 60, 70);
        };

        rightArm = function() {
            draw (60, 46, 100, 50);
        };

        leftArm = function() {
            draw (60, 46, 20, 50);
        };

        rightLeg = function() {
            draw (60, 70, 100, 100);
        };

        leftLeg = function() {
            draw (60, 70, 20, 100);
        };

        drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1];

        // OnClick //

       check = function() {
           list.onclick = function() {
               let geuss = (this.innerHTML);
               this.setAttribute("class", "active");
               this.onclick = null;
               for (let i = 0; i< word.length; i++) {
                   if (word[i] === geuss) {
                       geusses[i].innerHTML = geuss;
                       counter += 1;
                   }
               }
               
               let j = (word.indexOf(geuss));
               if (j === -1) {
                   lives -= 1;
                   messages();
                   animate(); 
               }
               else {
                   messages();
               }
           }
       }

       // PLAY THE GAME //

       play = function() {
           categories = [
               ["paris", "berlin", "madrid", "london", "prague", "amsterdam", "rome", "warsaw", "brussels", "zagreb", "sofia", "belgrade", "bucharest" ], 
               ["harry-potter", "shining", "gladiator", "fast-and-furious", "jaws", "jurassic-park", "avengers", "godfather", "alien", "spiderman", "pulp-fiction"], 
               ["lion", "elephant", "dog", "giraffe", "zebra", "cow", "horse", "kangaroo", "tiger", "sloth", "chimpanzee", "crocodile", "bear", "monkey", "parrot"]];

               selectedCategory = categories[Math.floor(Math.random()* categories.length)];
               word = selectedCategory[Math.floor(Math.random()* selectedCategory.length)];
               word = word.replace(/\s/g, "-");
               console.log(word);
               displayAlphabet();

               guesses = [ ];
               lives = 10;
               counter = 0;
               space = 0;
               result();
               messages();
               chooseCategory();
               canvas();
       }
       play();

       // HINTS //

         hint.onclick = function() {

      hints = [
      
    ];

    var catagoryIndex = categories.indexOf(chooseCategory);
    var hintIndex = chooseCategory.indexOf(word);
    showClue.innerHTML = "Clue: - " +  hints [categoryIndex][hintIndex];
  };


        
   }

  
