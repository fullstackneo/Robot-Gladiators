//generate a number between min-max
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1)) + min;
  return value;
};

// You can also log multiple values at once like this
// console.log(playerInfo.name, playerInfo.attack, playerInfo.health);

// fight function
var fight = function (enemy) {
  var isPlayerTurn = true;

  if (Math.random() > 0.5) {
    isPlayerTurn = false;
  }
  while (enemy.health > 0) {
    promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    if (promptFight.toLowerCase() === "fight") {
      if (isPlayerTurn) {
        //generate random damage of player
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
        enemy.health = Math.max(0, enemy.health - damage);
        console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");

        // check enemy's health
        if (enemy.health === 0) {
          console.log(enemy.name + " has died!");
          window.alert(enemy.name + " has died!");
          break;
        }
      } else {
        //generate random damage of player
        damage = randomNumber(enemy.attack - 3, enemy.attack);
        // remove players's health by subtracting the amount set in the enemy.attack variable
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");

        // check player's health
        if (playerInfo.health === 0) {
          console.log(playerInfo.name + " has died!");
          window.alert(playerInfo.name + " has died!");
          break;
        }
      }
      // switch attack turn
      isPlayerTurn = !isPlayerTurn;
    } else if (promptFight.toLowerCase() === "skip") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
        // subtract money from playerInfo.money for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("playMoney", playerInfo.money);
        break;
      }
    } else {
      return fight(enemy);
    }

    // check enemy's health
    if (enemy.health === 0) {
      console.log(enemy.name + " has died!");
      window.alert(enemy.name + " has died!");
      break;
    } else {
      window.alert(enemy.name + " still has " + enemy.health + " health left.");
      console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");
    }
    // remove players's health by subtracting the amount set in the enemy.attack variable
    if (playerInfo.health === 0) {
      console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");
      window.alert(playerInfo.name + " has died!");
      break;
    } else {
      window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
      console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");
    }
    // if player choses to skip
  }
};

var endGame = function () {
  // if player is still alive, player wins!
  if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
  var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE.");
  //if statement
  switch (parseInt(shopOptionPrompt)) {
    case 1:
      playerInfo.refillHealth();
      break;
    case 2:
      playerInfo.upgradeAttack();
      break;
    case 3:
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
  // reset player stats
  playerInfo.reset();
  //player name should not be null or space
  getPlayerName();

  // other game logic
  for (let i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      var pickedEnemyObj = enemyInfo[i];
      pickedEnemyObj.health = randomNumber(40, 60);
      console.log(pickedEnemyObj.name + " is the enemy");
      fight(pickedEnemyObj);
      // if we're not at the last enemy in the array
      if (i < enemyInfo.length - 1) {
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

//   window.alert("Your robot's health is " + playerInfo.health);
//   answer = window.confirm("Would you like to play again?");
// };

// while (answer) {
//   startGame();
//   endGame();
// }

var getPlayerName = function () {
  var name = "";
  while (name === "" || name === null) {
    name = window.prompt("What is your robot's name?");
  }
  console.log("Your name is " + name);
  return name;
};

var playerInfo = {
  name: getPlayerName(),
  attack: 40,
  health: 100,
  money: 10,
  reset: function () {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function () {
    if (playerInfo.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    } else {
      window.alert("You don't have enough money!");
    }
  }, // comma!
  upgradeAttack: function () {
    if (playerInfo.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    } else {
      window.alert("You don't have enough money!");
    }
  },
  // validateName: function () {
  //   this.name = window.prompt("What is your robot's name?");
  //   if (this.name !== null) {
  //     if (!this.name.replace(/\s*/g, "")) {
  //       window.alert("Blank name is not allowed!");
  //       this.validateName();
  //     }
  //   } else {
  //     window.alert("Blank name is not allowed!");
  //     this.validateName();
  //   }
  // },
};

var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14),
    shield: {
      type: "wood",
      strength: 10,
    },
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14),
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14),
  },
];
startGame();
