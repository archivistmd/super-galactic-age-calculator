export default class AgeSpace {
  constructor(age, planet){
    this.age = age;
    this.planet = planet;
  }

  planetAge() {
    if(this.age !== 0 && this.planet === "mercury") {
    return (this.age / .24);
  } else if (this.age !== 0 && this.planet === "venus") {
    return Math.round(this.age / .67);
  } else if (this.age !== 0 && this.planet === "earth") {
    return this.age;
  } else {
    return this.age;
  }
  }
}