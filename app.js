class Player {
    constructor (health, strength, attack) {
        this.strength = strength;
        this.attack = attack;
        this.health = health;
    }

    rollDie() {
        const val = Math.floor(Math.random() * 6) + 1;
        const attackVal = val * this.attack;
        console.log("Attack: ", attackVal);
        return attackVal;
    }

    getDamage(attackVal) {
        const val = Math.floor(Math.random() * 6) + 1;
        
        const defendingVal = this.strength * val;
        console.log("defendingVal: ", defendingVal);

        const toReduce = parseInt(defendingVal - attackVal);
        if(toReduce > 0) this.health = this.health - toReduce;

        console.log("Remaining Health: ", this.health);
        return this.health;
    }
}


let winner = 1;
const p1 = new Player(50, 5, 10);
const p2 = new Player(100, 10, 5);

let flag = true;
let round = 1;

while(true){
    console.log('====================================');
    console.log("Round ", round);
    round++;
    console.log('====================================');
    if(flag){
        const attackVal = p1.rollDie();
        const remHealth = p2.getDamage(attackVal);
        if(remHealth <= 0) {
            winner = 2;
            break;
        }
    }
    else {
        const attackVal = p2.rollDie();
        const remHealth = p1.getDamage(attackVal);
        if(remHealth <= 0) {
            winner = 1;
            break;
        }
    }

    flag = !flag;
}


console.log('====================================');
console.log('====================================\n');


console.log("\n!!!Game Over!!!\n");

console.log(winner == 1 ? "Winner: Player 1" : "Winner: Player 2");



