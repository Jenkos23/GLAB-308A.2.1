// Part 1: Humble Beginnings
// Let’s model a simple adventurer with basic properties such as health and an inventory.
 //  We will call the adventurer “Robin.”
 const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
      //Robin's travel companion, Leo
    companion: {
        name: "Leo",
        type: "Cat",
        //Leo's travel companion Frank
       companion: {
        name: "Frank",
        type: "Flea",
        inventory: ["small-hat", "sunglasses"]
       }
    },
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled ${result} dices.`)
        }
    
    }
    // console.log(adventurer.inventory[2])
      console.log(adventurer.roll(3))

    //A loop that logs in each Robin's inventory
    adventurer.inventory.forEach((inventory, element) => {
        console.log(`Inventory ${element+1} : ${inventory}`);
        
    });
        
              


    //Part 2: Class Fantasy
    class Character {
        //Part 4: Class Uniforms: Insterting a static class max_health to Character class;
        static Max_Health = 100;
        constructor (name, health, inventory){
            this.name = name;
            this.health = 100;
            this.inventory = [];

        }
        //Adding Roll() method to the class Character:
        roll (mod = 0) {
            const result = Math.floor(Math.random() * 20) + 1 + mod;
            console.log(`${this.name} rolled ${result} dices.`)
            }
        // toString(character = 'Character') {
        //         return `This ${character} has  ${this.health} % insurance with an ${this.inventory}` ;
        //       }

    }


    //Re-creating Robin Character using character class

    // const robin = new Character("Robin");
    // robin.inventory = ["sword", "portion", "artifact"];
    // robin.companion = new Character("Leo");
    // robin.companion.type = "Cat";
    // robin.companion.companion = new Character("Frank");
    // robin.companion.companion.type = "Flea";
    // robin.companion.companion.inventory = ["small-hat", "sunglasses"];
    // // Leo, Robin companion uses the roll() method to roll the dice
    // robin.companion.roll()
    // // Frank, Leo companion uses the roll() method to roll the dice
    // robin.companion.companion.roll()


    // Part 3: Class Features
    class Adventurer extends Character {
        //Part 4: Class Uniforms: Insterting a static class Roles to Adventurer class;
        static ROLES = ["Fighter", "Healer", "Wizard", "Guardian" ];
        constructor(name, role){
            super(name);
            // Adventurers have specialized roles.
            this.role = role;
            // Every Adventurers starts with a bed and 50 gold coins.
            this.inventory.push ("bedroll", "50 gold coins");
        }

        // Adventurers have the ability to scout ahead of them.
        scout () {
            console.log(`${this.name} is scouting ahead...`);

          }
        // other ability of an adventerer is glide through obstacles
        glide(){
            console.log(`${this.name}, who is ${this.role} is gliding over the tree obstacles...`);
            

        }

        //Part 6: Developing Skills
        duel(adventurer){
            // this.roll(adventurer - 1)
            // console.log(`This ${this.adventurer} rolled ${roll()} with the current ${this.health}`)
            console.log(`${this.name} challenges ${adventurer.name} to a duel!`)
            while (this.health > 50  && adventurer.health > 50){
                const myRoll = this.roll();
                const adventererRoll = adventurer.roll();
                console.log(`${this.name} rolled : ${myRoll}`);
                console.log(`${adventurer.name} rolled : ${adventererRoll}`);
            

                if (myRoll > adventererRoll){
                    // adventererRoll -= 1
                    adventurer.health -= 1;
                    console.log(`${this.name} wins this round!! ${adventurer.name} loses 1 health point.`);

                } else if (myRoll < adventererRoll){
                    this.health -= 1;
                    console.log(`${adventurer.name} wins this round!!! ${this.name}  loses 1 health point.`);

                }
                else{
                    console.log (`Both players had a tie in this health-match and inadvertly no health point was lost in this round..`)
                }
                console.log(`${this.name}'s health: ${this.health}`);
                console.log(`${adventurer.name}'s health: ${adventurer.health}`);
                console.log('---')
            }

        }

    }


    //Creating the companion class with properties and specific method 
    class Companion extends Adventurer{
        constructor(name, type, role, inventory){
            super(name, role, inventory);
            // Companion have different type attribute
            this.type = type;
            // //Every companion have sun-glasses, small-hat, backpack to journey with the adventerer
            // this.inventory.push("sun-glasses", "small-hat", "backpack" );

        }

        //Companion have the ability to drink water
        drink(){
            console.log(`${this.name} who is a ${this.type} type and a ${this.role} have a ${this.inventory[1]} and wants to purchase a bottle of water for a drink...`);
            
        }
    }
// Assigning the new Adventurer and companion classes to Robin and companion
    // const robin = new Character("Robin White");
    // robin.toString();


    

    const leo = new Companion("Leo Blufe", "Cat", "Travel-companion" )
    leo.drink()

    const fred = new Companion("Fred Mark", "Flea", "Inventory-manager")
    fred.glide()
    fred.drink()
    

    //Part 4: Class Uniforms: the static class is Inputed above and within the character and adventurer class..
    // console.log()


    //PART 5: Gather your Party

    class AdventurerFactory {  
        constructor (role) {
          this.role = role;
          this.adventurers = [];
        }
        generate (name) {
          const newAdventurer = new Adventurer(name, this.role);
          this.adventurers.push(newAdventurer);
        }
        findByIndex (index) {
          return this.adventurers[index];
        }
        findByName (name) {
          return this.adventurers.find((a) => a.name === name);
        }
      }
      
      const healers = new AdventurerFactory("Healer");
      const robin = healers.generate("Robin");
//Examples to use Adventurer class
let adventerer1 = new Adventurer("Emeka Okorodu");
let adventerer2 = new Adventurer("John Fordding");
let adventerer3 = new Adventurer("John Blue");
    adventerer1.glide();
    adventerer3.scout();
    adventerer1.duel(adventerer3)

// The wizard class extends to Adventurer and have the ability to cast spell: My wizard class is not working right now! will work on it later
// class Wizard extends Adventurer {
//     constructor(name) {
//         super(name);
//         this.classType = 'Wizard';
//         this.mana = 100;
//     }
  
//     castSpell(opponent) {
//         if (this.mana >= 20) {
//             const damage = Math.floor(Math.random() * 15) + 5;
//             opponent.health -= damage;
//             this.mana -= 20;
//             console.log(`${this.name} casts a spell on ${opponent.name} dealing ${damage} damage!`);
//         } else {
//             console.log(`${this.name} does not have enough mana to cast a spell.`);
//         }
//     }
//   }

//   //Example to use the wizard class
//   const sorcerer = new Wizard("Merlin");
//   sorcerer.castSpell(warrior);
