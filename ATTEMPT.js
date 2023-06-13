const dog = () => {
    const  sound = 'woof'
    return {
        talk: () => console.log(sound.toUpperCase())
    }
}

const sniffles = dog()
sniffles.talk()

// let user = {

//     firstName: "",
//     lastName: "",
//     set first(value){
//         this.firstName = value.toUpperCase();
//     },
//     set last(value){
//         this.lastName = value.toUpperCase();
//     },
//     fullName: function() {
//         return this.firstName+" " + this.lastName;
//     }
// };

// user.first = "Spongebob";
// user.last = "Squarepants";

// console.log(user.fullName())

class User {

    constructor(first, last){
        this.first = first;
        this.last = last;
    }

        set first(value){
            this.firstName = value.toUpperCase();
        }
        set last(value){
            this.lastName = value.toUpperCase();
        }
        get fullName() {
            return this.firstName+" " + this.lastName;
        }
    };

    let user = new User("Spongebob", "Squarepants");
    
    console.log(user.fullName);