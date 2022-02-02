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

// fight function
var fight = function (pickedEnemyName) {
  while (enemyHealth > 0) {
    promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    if (promptFight === "fight" || promptFight === "FIGHT") {
      
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      // check enemy's health
      if (enemyHealth <= 0) {
        console.log(pickedEnemyName + " has died!");
        window.alert(pickedEnemyName + " has died!");
        break;
      } else {
        window.alert(pickedEnemyName + " still has " + enemyHealth + " health left.");
        console.log(playerName + " attacked " + pickedEnemyName + ". " + pickedEnemyName + " now has " + enemyHealth + " health remaining.");
      }

      // remove players's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      {
        if (playerHealth <= 0) {
          console.log(pickedEnemyName + " attacked " + playerName + ". " + playerName + " now has " + 0 + " health remaining.");
          window.alert(playerName + " has died!");
          break;
        } else {
          console.log(pickedEnemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        }
      }
    } else if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playMoney", playerMoney);
        break;
      }
    } else {
      fight(pickedEnemyName);
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;

    // check enemy's health
    if (enemyHealth <= 0) {
      console.log(pickedEnemyName + " has died!");
      window.alert(pickedEnemyName + " has died!");
      break;
    } else {
      window.alert(pickedEnemyName + " still has " + enemyHealth + " health left.");
      console.log(playerName + " attacked " + pickedEnemyName + ". " + pickedEnemyName + " now has " + enemyHealth + " health remaining.");
      // remove players's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      if (playerHealth <= 0) {
        console.log(pickedEnemyName + " attacked " + playerName + ". " + playerName + " now has " + 0 + " health remaining.");
        window.alert(playerName + " has died!");
        break;
      } else {
        console.log(pickedEnemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
      }

      // if player choses to skip
    }
  }
};

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

// shop function
var shop = function () {
  console.log("entered the shop");
  var shopOptionPrompt = window.prompt("Would you like to refill, upgrade or leave?");
  //if statement
  switch (shopOptionPrompt) {
    case "REFILL":
    case "refill":
      if (playerMoney >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");
        playerHealth += 20;
        playerMoney -= 7;
      } else {
        window.alert("You don't have enough money!");
      }
      break;
    case "UPGRADE":
    case "upgrade":
      if (playerMoney >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
        playerMoney -= 6;
        playerAttack += 7;
      } else {
        window.alert("You don't have enough money!");
      }
      break;
    case "LEAVE":
    case "leave":
      window.alert("Leaving the store.");
      break;
    default:
      window.alert("Please give a valid answer, refill, upgrade or leave?");
      shop();
      break;
  }
};

// startgame
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

      // if we're not at the last enemy in the array
      if (i < enemyNames.length - 1) {
        // ask if player wants to use the store before next round
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

        // if yes, take them to the store() function
        if (storeConfirm) {
          shop();
        }
      }
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

startGame();
