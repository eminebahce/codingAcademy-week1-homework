// Write your JS here

const hero = {
    name: '',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: { type: '', damage: 2 }
};

const rest = (obj) => {
    hero.health = 10;
    return obj;
};

const pickUpItem = (heroLike, obj) => {
    heroLike.inventory.push(weapon);
};

const equipWeapon = () => {

};