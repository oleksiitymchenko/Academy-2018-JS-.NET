'use strict'
import Fighter from "./fighter";
import ImprovedFighter from "./improvedFighter";
import * as fight from "./fight";

let fighter1 = new Fighter("Vitalik", "200", "1000");
console.log(`Figher name: ${fighter1.name}; Power: ${fighter1.power};  Health: ${fighter1.health}`);

console.log("================================================");

let fighter2 = new ImprovedFighter("Volodya", "150", "9000");
console.log(`Figher name: ${fighter2.name}; Power: ${fighter2.power};  Health: ${fighter2.health}`);

console.log("================================================");

fight.fight(fighter1, fighter2, 2, 1, 8, 1000000);