// Write your JS here

const hero = {
    name: 'SailorMoon',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: { type: '', damage: 2 }
};

const rest = (obj) => {
    obj.health = 10;
    return obj;
};

const pickUpItem = (hero, weapon) => {
    hero.inventory.push(weapon);
};

const equipWeapon = (hero) => {
    if (hero.inventory.length != 0) {
        hero.weapon = hero.inventory[0];
    }
};

const weaponBag = () => {
    equipWeapon(hero);
};

const reset = () => {
    rest(hero);
};

const pickUp = () => {
    const weapon = {
        type: 'dagger',
        damage: 2
    };
    pickUpItem(hero, weapon);
};