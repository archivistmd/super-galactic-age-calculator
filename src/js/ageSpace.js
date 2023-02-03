export default class AgeSpace {
  constructor(age, planet){
    this.age = age;
    this.planet = planet;
  }

  planetAge() {
    if(this.age !== 0 && this.planet === "mercury") {
    return (this.age / .24);
  } else {
    return this.age;
  }
  }
}