class Cachorro{
  constructor(dog){
    this.dog = dog;
  }
  latir(dog) {
    console.log(`${this.dog} está latindo`)
  }
};

module.exports = Cachorro