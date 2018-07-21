'user strict'

export default class Fighter {

    constructor(name, power, health) {
        this.name = name;
        this.power = power;
        this.health = health;
    };

    hit(enemy, point) {
        let damage = point * this.power;
        enemy.setDamage(damage);
        return damage;
    };

    setDamage(damage) {
        this.health -= damage;
        console.log(`health: ${this.health}`)
    };

    knockout() {
        return new Promise((resolve) => {
            setTimeout(
                () => {
                    resolve('Game over');
                }, 500);
        });
    };



}