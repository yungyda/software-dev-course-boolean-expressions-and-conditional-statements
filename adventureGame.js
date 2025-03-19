const readline = require('readline-sync');

let hasSword = false;
let hasShield = false;

function startGame() {
    console.log("You wake up in a dark forest. There are two paths ahead: one leading to the mountains and one to a village.");
    const choice1 = readline.question("Do you choose the 'mountains' or the 'village'? ");

    if (choice1 === 'mountains') {
        console.log("You venture into the mountains and encounter a wild beast.");
        if (hasSword) {
            console.log("You bravely fight off the beast with your sword and continue your journey.");
        } else {
            console.log("Unarmed, you are defeated by the beast. Game over.");
            return;
        }
    } else if (choice1 === 'village') {
        console.log("You arrive at the village and find a marketplace.");
        const choice2 = readline.question("Do you want to buy a 'sword' or a 'shield'? ");
        if (choice2 === 'sword') {
            hasSword = true;
            console.log("You purchased a sword.");
        } else if (choice2 === 'shield') {
            hasShield = true;
            console.log("You purchased a shield.");
        } else {
            console.log("You decided not to buy anything.");
        }
    } else {
        console.log("Invalid choice. Please choose 'mountains' or 'village'.");
        startGame(); // Restart the game if the choice is invalid
        return;
    }

    // Continue the adventure
    console.log("As you continue your journey, you find a fork in the road.");
    const choice3 = readline.question("Do you go 'left' towards the dark cave or 'right' towards the river? ");

    if (choice3 === 'left') {
        console.log("You approach the dark cave.");
        if (hasSword && hasShield) {
            console.log("With your sword and shield, you feel confident and enter the cave, discovering hidden treasures. You win!");
        } else if (hasSword || hasShield) {
            console.log("With only one weapon, you face challenges but manage to find some treasures. Well done!");
        } else {
            console.log("Unarmed, you are overwhelmed by the dangers inside the cave. Game over.");
        }
    } else if (choice3 === 'right') {
        console.log("You arrive at the river.");
        const choice4 = readline.question("Do you want to 'swim' across or 'build' a raft? ");
        if (choice4 === 'swim') {
            console.log("You swim across the river and safely reach the other side.");
        } else if (choice4 === 'build') {
            console.log("You build a raft and sail across the river, enjoying a peaceful journey.");
        } else {
            console.log("Invalid choice. You stand by the river, unsure what to do. Game over.");
        }
    } else {
        console.log("Invalid choice. Please choose 'left' or 'right'.");
        // Optionally, you can loop back to choice3 to allow the player to choose again
    }
}

startGame();
