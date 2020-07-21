class User{
      constructor(name, age, email){
            this.name = name;
            this.age = age;
            this.email = email;
            this.lucoins = 0;
            this.courses = [];
      }

      login(){
            console.log(`${this.name} has logged in`);
            return this;
      }
      logout(){
            console.log(`${this.name} has logged out`);
            return this;
      }
}

class Moderator extends User{
      addCoins(user, lucoins){
            this.lucoins++;
            console.log(`${this.name} has ${this.lucoins} coins`);
            return this;
      }
      removeCoins(user, lucoins){
            this.lucoins--;
            console.log(`${this.name} has ${this.lucoins} coins`);
            return this;
      }
}

class Admin extends Moderator{
      addcourse(user,course){
            user.courses.push(course);
            console.log(user);
      }
      removecourse(user,course){
            user.courses.pop(course);
            console.log(user);
      }

}


let user1 = new User('Teddy',19,'teddy@gmail.com')
let user2 = new User('Adi',20,'adi@gmail.com')
let mod = new Moderator('Berli',29,'berli@gmail.com')
let admin = new Admin('Siri',32,'siri@gmail.com')
let users = [user1, user2,mod,admin];

users.forEach(element => {
      console.log(element);
});

user2.login()
user1.logout()
mod.addCoins(user1, 5);
mod.addCoins(user1, 2);
mod.removeCoins(user1, 1);
admin.addcourse(user1,'Javascript, Python, Blockcahin');
admin.addcourse(user1,'AI-ML');
admin.addcourse(user2,'Javascript, Python');
admin.removecourse(user1, 'AI-ML');