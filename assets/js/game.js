// var playerName = 'Clank McKrank';
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
// var playerAttack = 20;
var playerMoney = 10;
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth;
var enemyAttack = 10;
// You can also log multiple values at once like this
// console.log(playerName, playerAttack, playerHealth);

// shop function
var shop = function () {
  //prompt
  var shopanswer = window.prompt("Would you like to refill, upgrade or leave?");
  //if statement
  while (shopanswer != "refill" && shopanswer != "REFILL" && shopanswer != "upgrade" && shopanswer != "UPGRADE" && shopanswer != "leave" && shopanswer != "LEAVE") {
    shopanswer = window.prompt("Please give a valid answer, refill, upgrade or leave?");
  }

  if (shopanswer == "refill" || shopanswer == "REFILL") {
    playerHealth = 100;
  } else if (shopanswer == "upgrade" || shopanswer == "UPGRADE") {
    playerMoney -= 2;
    playerAttack += 10;
  } else if (shopanswer == "leave" || shopanswer == "LEAVE") {
  }
};

// fight function
var fight = function (enemyName) {
  while (enemyHealth > 0) {
    promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    while (promptFight != "skip" && promptFight != "SKIP" && promptFight != "fight" && promptFight != "FIGHT") {
      promptFight = window.prompt("please enter a valid answer");
    }

    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playMoney", playerMoney);
        shop();
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;

    // check enemy's health
    if (enemyHealth <= 0) {
      console.log(enemyName + " has died!");
      window.alert(enemyName + " has died!");
      shop();
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
      console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
      // remove players's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      if (playerHealth <= 0) {
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + 0 + " health remaining.");
        window.alert(playerName + " has died!");
        break;
      } else {
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
      }

      // if player choses to skip
    }
  }
};
// fight function statements
// Alert players that they are starting the round
// window.alert("Welcome to Robot Gladiators!");

// ask player if they'd like to fight or run

var startGame = function () {
  playerHealth = 100;
  playerAttack = 30;
  playerMoney = 10;
  for (let i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      var pickedEnemyName = enemyNames[i];
      enemyHealth = 50;
      console.log(pickedEnemyName + " is the enemy");
      fight(pickedEnemyName);
    } else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
  endGame();
};

// var answer = 1;
// var endGame = function () {

//   window.alert("Your robot's health is " + playerHealth);
//   answer = window.confirm("Would you like to play again?");
// };

// while (answer) {
//   startGame();
//   endGame();
// }

// function to end the entire game
var endGame = function () {
  window.alert("The game has now ended. Let's see how you did!");
};

var endGame = function () {
  // if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  } else {
    window.alert("You've lost your robot in battle.");
  }
  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    // restart the game
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

startGame();
