// Jungle, Animal, Food, Tiger, Monkey, Snake, Fish,
// Grain, Meat.
class Jungle{
    constructor(animals){
        this.animals = []
    }
    newAnimalinJungle(animal){
        this.animals.push(animal)
    }
    soundOff(){
        const soundOff = []
        for(const animal of this.animals){
            soundOff.push(`${animal.makeSound()}, Energy: ${animal.energy}`)
        }
        return soundOff
    }
}
class Animal {
    constructor(){
        this.energy = 10
    }
    makeSound(){
        this.energy -= 3
        return "some sound"
    }
    eatFood(food){
        this.energy += 5
    }
    sleep(){
        this.energy += 10
    }
}
class Food {

}
class Tiger extends Animal {
    constructor() {
      super();
    }
  
    sleep() {
      super.sleep()
      this.energy -= 5 
    }
  
    eatFood(food) {
      if (food instanceof Food) return "I can't eat that";
      return super.eatFood();
    }
  }
class Monkey extends Animal{
    constructor() {
        super();
      }
    makeSound(){
        this.energy -= 1
        return super.makeSound()
    }
    eatFood(){
        super.eatFood()
        this.energy -= 3
    }
    play(){
        if(this.energy < 8) return "I'm too tired"
        this.energy -= 8
        return "Oooo Oooo"
    }
}
class Snake extends Animal{
    constructor() {
        super();
      }

}
class Fish extends Food{

}
class Grain extends Food{

}
class Meat extends Food{

}
const monkey = new Monkey
const tiger = new Tiger
const snake = new Snake
const jungle = new Jungle()
jungle.newAnimalinJungle(tiger)
jungle.newAnimalinJungle(snake)
jungle.newAnimalinJungle(monkey)
tiger.sleep()
console.log(jungle.soundOff())
monkey.sleep()
console.log(monkey.play())
console.log(monkey.energy)