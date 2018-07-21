'use strict'

export const fight = async(fighter1, fighter2, ...points) => {
    const ptsCopy = points.slice();

    for (let number = 0; number < ptsCopy.length; number++) {
        if (number % 2 == 0) {
            beat(fighter1, fighter2, ptsCopy[number]);
            if (isDead(fighter2)) {
                await final(fighter2);
                break;
            }

        } else {
            beat(fighter2, fighter1, ptsCopy[number]);
            if (isDead(fighter1)) {
                await final(fighter1);
                break;
            }
        }
    }
};

const beat = (attacker, defender, point) => {
    console.log(`Before fight ${defender.name} has: ${defender.health} hp`);
    const damage = attacker.hit(defender, point);
    console.log(attacker.name + " hit " + defender.name + " damage: " + damage);
    console.log(`Now ${defender.name} has: ${defender.health} hp`);
};

const isDead = (fighter) => fighter.health <= 0;

const final = async(fighter) => {
    console.log('He is dead now');
    await fighter.knockout();
    console.log('Game is over');
};