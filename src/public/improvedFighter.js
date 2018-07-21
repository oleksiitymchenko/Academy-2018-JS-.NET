'use strict'

import Fighter from "./fighter";


export default class ImprovedFighter extends Fighter {
    constructor(name, power, health) {
        super(name, power, health);
    }

    doubleHit(enemy, point) {
        super.hit(enemy, 2 * point);
    }
}