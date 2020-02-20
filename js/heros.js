

const mage={
    name: "Ezax",
    inv: [
        {name:"Staff", dmg: 5}
    ],
    dmg: 10,
    hp: 60,
    arm: 15,
    str: 5,
    int: 25,
    get att(){
        return this.str
    },
    set takeDmg(dmg){
       this.hp = this.hp - dmg
    }
    

}

const warlord={
    name: "Angra",
    inv: [
        {name:"Knife", dmg: 10}
    ],
    dmg: 10,
    hp: 110,
    arm: 5,
    str: 15,
    int: 5,
    get att(){
        return this.str
    },
    set takeDmg(dmg){
       this.hp = this.hp - dmg}
}

const barbarian={
    name: "Ragnar",
    inv: [
        {name:"SmallKnife", dmg: 5}
    ],
    dmg: 25,
    hp: 100,
    arm: 0,
    str: 20,
    int: 0,
    get att(){
        return this.str
    },
    set takeDmg(dmg){
       this.hp = this.hp - dmg
    }
}

const Necromancer={
    name: "Uhone",
    inv: [
        {name:"Staff", dmg: 5}, {name:"SmallKnife", dmg: 5} 
    ],
    dmg: 15,
    hp: 80,
    arm: 10,
    str: 15,
    int: 15,
    get att(){
        return this.str
    },
    set takeDmg(dmg){
       this.hp = this.hp - dmg
    }
}