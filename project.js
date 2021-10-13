//////////////////////////////////////////////////////
///                                                ///
///           JS BEGINNER GROUP PROJECT            ///
///                                                ///
///              TEXT ADVENTURE GAME               ///
///                                                ///
//////////////////////////////////////////////////////


/* 
  Now it's time to put all those new skill to the test!  We're going to create 
  a little text based choose-your-own adventure game!

  Work together in your group to come up with the most creative story you can 
  come up with.  The more twists and turns the better!  You can definitely do 
  better than this silly little example below.

  You'll notice some new functions used below (alert, confirm & prompt).  These 
  are all built in browser functions.  They allow you to interact with the user by
  sending them messages or asking the questions.  With alert, you just send a message, 
  but with confirm and prompt, you can save their response and use it to determine 
  what your game should do next!

  DOCUMENTATION:  https://javascript.info/alert-prompt-confirm

  NOTE: The code below is just an example!  You don't have to use the same 
  structure or style.  Feel free to change up the datatypes or the control 
  flow to suit your preference.  As long as it works, then you're good to go!

  HAVE SOME FUN WITH IT!
*/ 
/*
Possible: Potion, Possible, Inventory, Possible: Damage Logic

Jarvis Chat Bot, Slay a Dragon, How GOT Should Have Ended, Video Game with character creation, story, health logic

We use an Object here to keep track of all our messages in one easy to access place.  You can use a different method if you like.
*/
/*const messages = {
  A: "Welcome, would you like to play a game?",
  B1: "Awesome!  Let's get started!",
  B2: "Well have a nice day then.",
  C: "Would you prefer to go to the beach or the park today?",
  D1: "You got eaten by a shark and died.  Click OK to play again!",
  D2: "Oh yeah.  Let's hit up central park",
  E1: "Welcome to Central Park.  Would you like to go to the zoo?"
}

function beginGame() {
  // 'confirm' shows a message and waits for the user to press “OK” or “CANCEL”. It returns true for OK and false for CANCEL/Esc.
  const response = confirm(messages.A);
  if (response) {
    // 'alert' shows a message.
    alert(messages.B1);
    nextQuestion();
  } else {
    alert(messages.B2)
  }
}

function nextQuestion() {
  // 'prompt' shows a message asking the user to input text. It returns the text or, if CANCEL or Esc is clicked, null.
  const response = prompt(messages.C);
  if (response === 'beach') {
    const startOver = confirm(messages.D1);
    if (startOver) {
      beginGame();
    } 
  } else if (response === 'park') {
    alert(messages.D2);
    const goToZoo = confirm(messages.E1)
    if (goToZoo) {
      alert('you get the idea...')
    }
  }

}
*/
/*
don't forget to initiate your game!!
beginGame();
*/

// HISHE: GOT Spoof RPG
// This will be a role play game with character creation, story line, and health logic
// Starting off our game with a global object to actively reference during subsequent functions.
const masterGameObj = {
  messages : {
    // Contains all messages and prompts for the game.
    A: "Welcome, would you like to play a Game of Thrones?",
    B1: "Terrific! The Game of Thrones begins!!",
    B2: "Well this is awkward?!",
    C: "Which character would you like to play?: John Snow, Daenerys Targaryen, or Tyrion Lannister?",
    C1: ' Wubba Dubba Dub Dub: \nWould you like to try again? \n(The input must be a string)',
    C2: "Let's try this again.",
    E3: "What do you do? Attack? Defend? Or Run?",
    Z1: "Would you like to play again?",
    Z2: "Game Over!"},
  characterLogic : {
    // Contains everything needed for character-related logic
    // "The balanced role"
    D1: {Character : 'John Snow', Description : 'The Backstab Prone Warrior', Health : 8, Attack : 7, Defense: 6},
    // "The glass cannon role"
    D2: {Character : 'Daenerys Targaryen',  Description : 'The Crazy Dragon Lady', Health : 10, Attack : 10, Defense : 2 },
    // "The squishy defensible role"
    D3: {Character : 'Tyrion Lannister', Description : 'The Drunken Bard', Health : 4, Attack : 4, Defense : 12},
    // "Big boss (Enemy)"
    D4: {Character : 'Night King', Description : 'Ready To Dunk On You', Health : 12, Attack : [4,7], Defense : 5}
  }
}
function beginGame() {
  // Confirm player input. Do you want to play? Y / N. If Yes, pass input into nested function. If No, exit out.
  const response = confirm(masterGameObj.messages.A)
  if (response) {
    alert(masterGameObj.messages.B1)
    nextQuestion()
  } else {
    alert(masterGameObj.messages.B2)
  }  
}

function nextQuestion(){
  // Prompt to capture player input and pass into characterCreation function
  const response = prompt(masterGameObj.messages.C);
  characterCreation(response);
}

function characterCreation(decision1){
  //Decision logic. A function used to decide which character you want to be, based on input from last nextQuestion function. If it satisfies a condition, it passes and input into our battleCommences function. If null, kick back to nextQuestion function. Players can also cancel out succesfully from null.
  if (decision1 === 'John Snow'){
    const characterSelected = alert(`Congratulations! You have selected ${masterGameObj.characterLogic.D1.Character}, ${masterGameObj.characterLogic.D1.Description}!`);
    battleCommences('D1');
  } else if (decision1 === 'Daenerys Targaryen') {
      const characterSelected = alert(`Congratulations! You have selected ${masterGameObj.characterLogic.D2.Character}, ${masterGameObj.characterLogic.D2.Description}!`);
      battleCommences('D2');
    }
    else if (decision1 === 'Tyrion Lannister') {
      const characterSelected = alert(`Congratulations! You have selected ${masterGameObj.characterLogic.D3.Character}, ${masterGameObj.characterLogic.D3.Description}!`);
      battleCommences("D3");
    } else {
    // Default answer if answer !== previous 3.
      const response = confirm(masterGameObj.messages.C1)
        if (response) {
          nextQuestion();
        } 
    }
}

function battleCommences(characterID){
  // Function to start battle scripts, keep track of battle related object values, provide a framework for mutable variables (like health), and pass in values to subsequent battle related functions. Passess in previously chosen character and passes in a battle object initialized with global object values. This allows battle functions to keep track of changing values like (health) and gives us a shorthand for frequently referenced values. 
  let battleRef = {
        enemyDefense : masterGameObj.characterLogic.D4.Defense,
        playerDefense : masterGameObj.characterLogic[characterID].Defense,
        enemyAttack : masterGameObj.characterLogic.D4.Attack[1],
        playerAttack : masterGameObj.characterLogic[characterID].Attack,
        enemyName : masterGameObj.characterLogic.D4.Character,
        playerName : masterGameObj.characterLogic[characterID].Character,
        enemyHealth : masterGameObj.characterLogic.D4.Health,
        playerHealth : masterGameObj.characterLogic[characterID].Health
  }
  const encounter = alert(`${masterGameObj.characterLogic[characterID].Character} has encountered the ${masterGameObj.characterLogic.D4.Character}!\nHe looks like he's ${masterGameObj.characterLogic.D4.Description}!`);
  battleLogic(battleRef, characterID);

  // alert(`In Dev`);
}

function battleLogic(battleRef, characterID){
  //Function used to evaluate the resolved battle related functions and any updates to the battleRef object. Depending on the satisfied conditions, it may through a prompt, call another function, loop back on invalid inputs, or trigger win/lose alerts.
  if ((battleRef.playerHealth > 0) && (battleRef.enemyHealth > 0)){
    const option = prompt(masterGameObj.messages.E3)
    if (option === 'Attack'){
      // Attack option & boss attack results. 
      attackDamageRoll(battleRef, characterID);
    } else if (option === 'Defend'){
      // Defense option & boss attack results.
      defenseDamageRoll(battleRef, characterID);
    } else if (option === `Run`) {
        deathCycle(battleRef, characterID);
    } else {
        // Default answer if answer !== previous 3.
        const response = confirm(masterGameObj.messages.C1)
        if (response) {
          battleLogic(battleRef, characterID);
        } 
    }
  } else if (battleRef.enemyHealth <= 0){
      // Win condition!
      alert (`${battleRef.playerName} has defeated ${battleRef.enemyName}!!`);
      const playAgain = confirm(masterGameObj.messages.Z1);
      if (playAgain) {
        beginGame();
      } else if (playAgain === false){
        return exit()
      }
  } else if (battleRef.playerHealth < 0){
      // Lose condition!
      deathCycle(battleRef, characterID);
  } else {
    exit();
  }
    
}

function deathCycle(battleRef, characterID){
  // Function to process death or lose condition outputs, based on the passed in values. You are dead. Commentary on character death. Play again or exit out.
  if (battleRef.playerName === 'John Snow'){
    alert(`The ${battleRef.enemyName} walks up behind you and whispers,  "For The Watch." \nRIP ${battleRef.playerName}`);
    const playAgain = confirm(masterGameObj.messages.Z1);
       if (playAgain) {
      beginGame();
    } else if (playAgain === false){
        return exit()
    }
  } else if (battleRef.playerName === 'Daenerys Targaryen'){
    alert(`The ${battleRef.enemyName} says "All of your dragons are mine now." \nRIP ${battleRef.playerName}`);
    const playAgain = confirm(masterGameObj.messages.Z1);
      if (playAgain) {
      beginGame();
      } else if (playAgain === false){
        return exit()
      }
  } else if (battleRef.playerName === 'Tyrion Lannister'){
    alert(`Unfortunately for ${battleRef.playerName}, the ${battleRef.enemyName} doesn't care for honeyed words.\nRIP ${battleRef.playerName}`);
    const playAgain = confirm(masterGameObj.messages.Z1);
      if (playAgain) {
        beginGame();
      } else if (playAgain === false){
        return exit()
      }
  } 
}

function attackDamageRoll(battleRef, characterID) {
  // Function evaluates enemy & player health. It throws alerts to indicate damage and turns. The player attacks first. If the enemy dies, it triggers win condition. If not, the enemy attacks and values are looped back to battleLogic function.
  const enemyDefenseRoll = (Math.random()*battleRef.enemyDefense);
  const playerDefenseRoll = (Math.random()*battleRef.playerDefense);
  if (enemyDefenseRoll < battleRef.playerAttack) {
    battleRef.enemyHealth += enemyDefenseRoll - battleRef.playerAttack;
    alert(`The ${battleRef.enemyName}'s health is now ${battleRef.enemyHealth.toFixed(1)}!`);
  } else {
    alert(`The ${battleRef.enemyName}'s health is now ${battleRef.enemyHealth.toFixed(1)}!`)
  }
  if (battleRef.enemyHealth <= 0){
    // Win condition!
    alert (`${battleRef.playerName} has defeated ${battleRef.enemyName}!!`);
    const playAgain = confirm(masterGameObj.messages.Z1);
    if (playAgain) {
      beginGame();
    } else if (playAgain === false){
      return exit()
    }
  }
  if (playerDefenseRoll < battleRef.enemyAttack) {
    battleRef.playerHealth += playerDefenseRoll - battleRef.enemyAttack;
    alert(`The ${battleRef.enemyName} attacks!\nYour health is now ${parseFloat(battleRef.playerHealth.toFixed(1))}!`);
  } else {
      alert(`The ${battleRef.enemyName} attacks!\nYour health is now ${parseFloat(battleRef.playerHealth.toFixed(1))}!`);
  }
  battleLogic(battleRef, characterID);
}

function defenseDamageRoll(battleRef, characterID) {
  // Function evaluates enemy & player health. It throws alerts to indicate damage and turns. The enemy attacks and values are looped back to battleLogic function.
  if ((battleRef.playerDefense*2) > battleRef.enemyAttack){
    alert(`The ${battleRef.enemyName} attacks!\nYour health is now ${parseFloat(battleRef.playerHealth.toFixed(1))}!`);
  } else {
    battleRef.playerHealth += (battleRef.playerDefense*2) - battleRef.enemyAttack;
    alert(`Winter is coming! Defend yourself!! \nThe ${battleRef.enemyName} attacks! \nYour health is now ${parseFloat(battleRef.playerHealth.toFixed(1))}!`)
    }
  battleLogic(battleRef, characterID);
}

function exit(){
  // Function to push alert Game Over.
  alert(masterGameObj.messages.Z2);
}
beginGame();
