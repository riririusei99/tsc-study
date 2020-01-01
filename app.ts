
class Helpers {
  static PI: number = 3.14;
  static calcCircum(diameter: number){
    return this.PI * diameter;
  }
}
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircum(83));
