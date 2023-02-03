export default class FutureAge {
  constructor(age, yearsTill){
    this.age = age;
    this.yearsTill = yearsTill;
    this.mercuryTime = Math.round((this.yearsTill - age) / .24);
    this.venusTime = Math.round((this.yearsTill - age) / .62);
    
  }
}