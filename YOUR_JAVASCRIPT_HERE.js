// Write your JS here

const hero = {
    name: 'Sailor Moon',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: { type: '', damage: 2 }
};

const onloadInfo = (hero) => {
    document.getElementById('heroName').innerText = "Hero Name";
    document.getElementById('heroNameValue').innerText = hero.name;
    document.getElementById('heroHealth').innerText = "Health";
    document.getElementById('heroHealthValue').innerText = hero.health;
    document.getElementById('weaponType').innerText = "Weapon Type";
    document.getElementById('weaponTypeValue').innerText = hero.weapon.type;
    document.getElementById('weaponDamage').innerText = "Weapon Damage";
    document.getElementById('weponDamageValue').innerText = hero.weapon.damage;
    document.getElementById('firstHeroName').innerText = hero.name;
    document.getElementById('secondHeroName').innerText = "Dark Lady";
};

const onloadInformation = () => {
    onloadInfo(hero);
};

const rest = (obj) => {
    obj.health = 10;
    let progressBarHero = document.getElementById('progressBarHero');
    progressBarHero.style.width = 100 + '%';
    return obj;
};

const pickUpItem = (hero, weapon) => {
    //console.log(weapon.type);
    hero.inventory.push(weapon);
    document.getElementById('dagger').src = "images/noitem.png";
};

const equipWeapon = (hero) => {
    if (hero.inventory.length != 0) {
        hero.weapon = hero.inventory[0];
        document.getElementById('inn').src = "images/sailormoonwithweapon.png";
        document.getElementById('weaponTypeValue').innerText = hero.weapon.type;
        document.getElementById('weponDamageValue').innerText = hero.weapon.damage;
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
    //console.log(weapon.type);
    pickUpItem(hero, weapon);
};

const setNewHeroName = (event) => {
    event.preventDefault();
    let newHeroName = document.getElementById('newHeroName').value;
    hero.name = newHeroName;
    document.getElementById('firstHeroName').innerText = hero.name;
    document.getElementById('heroNameValue').innerText = hero.name;

    $(document).ready(function() {
        $('#newHeroName').val('');
    });

};

const heroAttach = (event) => {
    event.preventDefault();
    let progressBarHero = document.getElementById('progressBarHero');
    let width = 100;
    let attack = setInterval(frame, 100);

    function frame() {
        if (width <= 10) {
            clearInterval(attack);
        } else {
            width = width - 2;
            progressBarHero.style.width = width + '%';
        }
    }
};

const enemyAttach = (event) => {
    event.preventDefault();
    let progressBarHero = document.getElementById('progressBarEnemy');
    let width = 100;
    let attack = setInterval(frame, 100);

    function frame() {
        if (width <= 10) {
            clearInterval(attack);
        } else {
            width = width - 2;
            progressBarEnemy.style.width = width + '%';
        }
    }
};

const enemyDisappear = () => {
    document.getElementById('enemy').remove();
};