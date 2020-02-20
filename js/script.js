
// anchors

const heroData = document.getElementById("heroStats")
const enemyData = document.getElementById("enemyStats")
const potionBtn = document.getElementById("potionBtn")

// constructors

class Hero {
    constructor(name,prof,hp,arm,dmg,int,weapon){
    this.name=name,
    this.prof=prof,
    this.hp=hp,
    this.arm=arm,
    this.dmg=dmg,
    this.int=int,
    this.weapon=weapon,
    this.potions=[{name:"HP Potion", hp:25}]
 }
 attack(){
     heroAttack() 
     enemyAttack()
 }
 usePotion(){
     if(this.potions[0]){
         sendMessage("Heal Time Guys")
         this.hp=this.hp+this.potions[0].hp
         this.potions.pop()
         getHeroData()
     }else{
         alert("You Ran Out Of Potions!")
     }
     enemyAttack()
}
 changeWeapon(newWeapon){
this.weapon=newWeapon

 }
}

class Enemy {
constructor(type,name,hp,arm,dmg,int,weapon){
  this.type=type,
  this.name=name,  
  this.hp=hp,
  this.arm=arm,
  this.dmg=dmg,
  this.int=int,
  this.weapon=weapon
}
attack(){
enemyAttack()
}
}

// heroes

const barbarian = new Hero("Kserko","Barbarian",100,5,20,0,{name:"Small Knife",dmg:5})
const mage = new Hero("Ezax","Mage",60,0,5,25,{name:"Staff",dmg:5})
//const warlord
//const necromancer

const hero = mage
// enemies

const beast = new Enemy("Beast","Tiger",50,0,5,0,{name:"Claws", dmg: 5 })
//const bulbasaur 

const enemy = beast

// functions

const getRandom = (highestNum) =>{
    const random=Math.floor(Math.random() * (highestNum))
    return random
}

const sendMessage=(message)=>{
    console.log(message)
}

const heroAttack = () =>{
if(enemy.hp > 0 ){
    enemy.hp=enemy.hp-hero.dmg-hero.weapon.dmg
    if(enemy.hp < 0){
        enemy.hp = 0 
        getEnemyData()
    }
    else{
        getEnemyData()
    }
}

}

const enemyAttack = () =>{
if(enemy.hp > 0){
    hero.hp=hero.hp-enemy.dmg-enemy.weapon.dmg+hero.arm
getHeroData()
}

}

const getHeroData=()=>{
heroData.innerText=`Name: ${hero.name}
Class: ${hero.prof}
Health: ${hero.hp}
Armour: ${hero.arm}
Damage: ${hero.dmg} (+${hero.weapon.dmg})
Intelligence: ${hero.int}
Weapon: ${hero.weapon.name} (Damage: ${hero.weapon.dmg})
Potions: ${hero.potions.length}`
if(hero.potions.length==0){
potionBtn.disabled=true
}    
}

const getEnemyData=()=>{
    enemyData.innerText=`
    Type: ${enemy.type}
    Name: ${enemy.name}
    Health: ${enemy.hp}
    Armour: ${enemy.arm}
    Damage: ${enemy.dmg} (+${enemy.weapon.dmg})
    Intelligence: ${enemy.int}
    Weapon: ${enemy.weapon.name} (Damage: ${enemy.weapon.dmg})
    `
}

// loot

const invLoot=[{name: "Shield", arm: 5}, {name:"Axe", str: 10}, {name:"Armour", arm:10}]
const consumLoot = [{name:"HealingPotion", hp:25}, {name: "ManaPotion", int:25}, { name: "Poison", dmg: 20}, {name: "Coin", value:5}]  
const specialLoot = [{name: "FireBall", dmg: 30, cost: 5 }, {name: "LightningBolt", dmg:35, cost:10}]
 


// test

getHeroData()
getEnemyData()
