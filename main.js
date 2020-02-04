const menu = {
  
  
  _courses : {
    appetizers:[],
    mains:[],
    desserts:[],
  },
    get appetizers() {
      return this._courses.appetizers
    },
    get mains() {
      return this._courses.main
    },
    get desserts() {
      return this._courses.desserts
    },
    set appetizers(appetizers) {
      this._courses.appetizers = appetizers;
    },
    set mains(mains) {
      this._courses.mains = mains;
    },
    set desserts(desserts) {
      this._courses.desserts = desserts;
    },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
    
  },
  addDishToCourse(courseName , dishName , dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
      
    }
    return this._courses[courseName].push(dish); //experiment
    
  },
  getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex]
  },
  generateRandomMeal() {
    const appetizers = this.getRandomDishFromCourse('appetizers');
    const mains = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizers.price + mains.price + desserts.price;
    
    return ` Your meal is ${appetizers.name} , ${mains.name} and ${desserts.name} and total price of your food is $${totalPrice} .` ;
  }
}


menu.addDishToCourse('appetizers' ,'salad', 9.2);
menu.addDishToCourse('appetizers' ,'twings', 2.12);
menu.addDishToCourse('appetizers' ,'wings' ,12.12);

menu.addDishToCourse('mains' ,'fries' ,32.12);
menu.addDishToCourse('mains' ,'chap' ,14.12);
menu.addDishToCourse('mains' ,'salad', 42.12);

menu.addDishToCourse('desserts' ,'roshogolla', 62.11);
menu.addDishToCourse('desserts' ,'Doi' ,12.12);
menu.addDishToCourse('desserts' ,'golapJamun', 52.12);

const meal = menu.generateRandomMeal();

console.log(meal)




