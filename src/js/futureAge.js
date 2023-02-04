export default class FutureAge {
  constructor(age, yearsTill){
    this.age = age;
    this.yearsTill = yearsTill;
    this.mercuryTime = Math.round((this.yearsTill - age) / .24);
    this.venusTime = Math.round((this.yearsTill - age) / .62);
    this.earthTime= (this.yearsTill - this.age);
    this.marsTime = Math.round((this.yearsTill - age) / 1.88);
    this.jupiterTime = Math.round((this.yearsTill - age) / 11.86);
  }
}