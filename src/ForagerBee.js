class ForagerBee extends Grub{
  // TODO..
  constructor(){
    super();
    this.age = 10,
    this.color = 'yellow',
    this.job = 'find pollen',
    this.canFly = true,
    this.treasureChest = [];
  }
  forage(string){
    this.treasureChest.push(string);
  }

};
